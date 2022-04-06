#!/usr/bin/env node

/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

import { fileURLToPath } from 'url';

import { globby } from 'globby';
import inquirer from 'inquirer';
import _ from 'lodash';
import type { PackageJson } from 'type-fest';
import { $, argv, cd, chalk, fs, path } from 'zx';

import { removeTemplateExtension, sortPropertiesAlphabetically } from './utils/index.js';

type ForgeDevKitMetaData = {
    title: string;
    description?: string;
    supportedModuleTypes?: string[];
    orderWeight: number;
    requiredScopes?: string[];
};

const getModuleName = async () => {
    const { moduleName } = await inquirer.prompt<{ moduleName: string }>([
        {
            type: 'input',
            name: 'moduleName',
            message: 'Name your module (must be a valid directory name)',
        },
    ]);
    return moduleName;
};

const getApps = async ({ dirName }: { dirName: string }) => {
    const resourcesDirectory = path.resolve(dirName, '../resources');

    const appsDirectory = path.resolve(resourcesDirectory, 'apps');

    const appNames = await globby('*', { cwd: appsDirectory, onlyDirectories: true });

    const apps = await Promise.all(
        appNames.map(async (appName) => {
            const appDirectory = path.resolve(appsDirectory, appName);

            const packageJsonFile = path.resolve(appDirectory, 'package.json.txt');
            const packageJson = (await fs.readJson(packageJsonFile)) as PackageJson & {
                fdk: ForgeDevKitMetaData;
            };

            const relativeOtherFiles = await globby(['**/*', '**/.*'], {
                cwd: appDirectory,
                ignore: ['package.json.txt'],
            });

            const otherFiles = relativeOtherFiles.map((relativeFile) => ({
                relative: relativeFile,
                absolute: path.resolve(appDirectory, relativeFile),
            }));

            return { appName, packageJson, otherFiles };
        }),
    );

    const sortedApps = _.sortBy(apps, (app) => app.packageJson.fdk.orderWeight);

    return sortedApps;
};

const getTemplate = async ({ dirName }: { dirName: string }) => {
    const templateDirectory = path.resolve(dirName, '../resources/template');

    const packageJsonFile = path.resolve(templateDirectory, 'package.json.txt');
    const packageJson = (await fs.readJson(packageJsonFile)) as PackageJson;

    const relativeOtherFiles = await globby(['**/*', '**/.*'], {
        cwd: templateDirectory,
        ignore: ['package.json.txt'],
    });

    const otherFiles = relativeOtherFiles.map((relativeFile) => ({
        relative: relativeFile,
        absolute: path.resolve(templateDirectory, relativeFile),
    }));

    return { packageJson, otherFiles };
};

const run = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));

    const [cmd = 'create', moduleNameArg] = argv._;

    if (cmd !== 'create') {
        console.error(
            chalk.red(`Error: Unknown command '${cmd}'. For now, only 'create' is supported.`),
        );
        process.exit(1);
    }

    const moduleName = moduleNameArg || (await getModuleName());

    const targetDirectory = path.resolve(process.cwd(), moduleName);

    if (fs.existsSync(targetDirectory)) {
        console.error(chalk.red(`Error: Directory '${moduleName}' already exists.`));
        process.exit(1);
    }

    const apps = await getApps({ dirName });

    const { selectedAppIndex } = await inquirer.prompt<{ selectedAppIndex: number }>([
        {
            type: 'list',
            name: 'selectedAppIndex',
            message: 'Pick your module template',
            choices: apps.map((app, index) => {
                const { appName, packageJson } = app;
                const { title, description, supportedModuleTypes } = packageJson.fdk;

                const name = [
                    `📦 ${title}`,
                    ...(description ? [chalk.dim(chalk.white(description))] : []),
                    supportedModuleTypes && supportedModuleTypes.length > 0
                        ? chalk.dim(
                              chalk.white(
                                  `(supported module type(s): ${supportedModuleTypes.join(', ')})`,
                              ),
                          )
                        : chalk.dim(chalk.white('(supported module types: all)')),
                ].join(' ');

                return { name, value: index, short: appName };
            }),
        },
    ]);

    const selectedApp = apps[selectedAppIndex];

    const template = await getTemplate({ dirName });

    const combinedDependencies = {
        ...template.packageJson.dependencies,
        ...selectedApp.packageJson.dependencies,
    };

    const combinedDependenciesWithFixedVersions = _.mapValues(combinedDependencies, (version) =>
        version.startsWith('^') ? version : `^${version}`,
    );

    const combinedPackageJson = {
        ...template.packageJson,
        name: moduleName,
        version: '0.0.1',
        dependencies: sortPropertiesAlphabetically(combinedDependenciesWithFixedVersions),
        fdk: {
            templateVersion: template.packageJson.version ?? 'n/a',
        },
    };

    // create project

    console.log(chalk.cyan('Creating module...'));

    // create target directory
    await fs.mkdir(targetDirectory, { recursive: true });

    await Promise.all([
        // write package.json
        fs.writeJson(path.resolve(targetDirectory, 'package.json'), combinedPackageJson, {
            spaces: 2,
        }),
        // write other template and app files
        ...[...template.otherFiles, ...selectedApp.otherFiles].map(
            async ({ relative, absolute }) => {
                const targetFile = removeTemplateExtension(path.resolve(targetDirectory, relative));
                const targetFileDirectory = path.dirname(targetFile);
                await fs.mkdir(targetFileDirectory, { recursive: true });
                await fs.copyFile(absolute, path.resolve(targetDirectory, targetFile));
            },
        ),
    ]);

    console.log(chalk.cyan('Module created.'));

    cd(moduleName);

    // yarn

    console.log(chalk.cyan("Running 'yarn' in module..."));
    await $`yarn`;
    console.log(chalk.cyan("'yarn' finished."));

    // generate

    console.log(chalk.cyan("Running 'generate' in module..."));
    await $`yarn run generate`;
    console.log(chalk.cyan("'generate' finished."));

    // output

    console.log(
        chalk.green(
            'Your FDK module is now ready to be used. Follow instructions at https://fine.software/forge-dev-kit on how to use it in your Forge app.',
        ),
    );

    const { requiredScopes } = selectedApp.packageJson.fdk;

    if (requiredScopes && requiredScopes.length > 0) {
        console.log(
            chalk.yellow(
                `⚠️  Your module requires the following permission scope(s) to work: ${requiredScopes.join(
                    ', ',
                )}`,
            ),
        );
    }

    process.exit(0);
};

run();
