/* eslint-disable no-console */

import { fileURLToPath } from 'url';

import { globby } from 'globby';
import type { TsConfigJson } from 'type-fest';
import { chalk, fs, path } from 'zx';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const packagesDirectory = path.resolve(dirName, '../..');

const copyTemplate = async () => {
    const BASE_TEMPLATE_PATH = 'forge-dev-kit-template';

    console.log(chalk.cyan('Pre-prepack: Copying files from source template...'));

    const sourcePath = path.resolve(packagesDirectory, BASE_TEMPLATE_PATH);
    const relativeSourceFiles = await globby(['**/*', '**/.*'], {
        cwd: sourcePath,
        ignore: ['.next', 'node_modules', 'out', 'CHANGELOG.md', 'src'],
    });

    const targetPath = path.resolve(dirName, '../resources/template');

    await Promise.all(
        relativeSourceFiles.map(async (relativeSourceFile) => {
            const sourceFile = path.resolve(sourcePath, relativeSourceFile);
            const targetFile = path.resolve(targetPath, relativeSourceFile);
            const targetDirectory = path.dirname(targetFile);
            await fs.mkdir(targetDirectory, { recursive: true });

            // ts config
            if (sourceFile === 'tsconfig.json') {
                const tsConfig = (await fs.readJson(sourceFile)) as TsConfigJson;
                await fs.writeJson(
                    `${targetFile}.txt`,
                    {
                        ...tsConfig,
                        compilerOptions: {
                            ...tsConfig.compilerOptions,
                            typeRoots: ['./node_modules/@types'],
                        },
                    },
                    { spaces: 2 },
                );
            }

            // everything else
            else {
                await fs.copyFile(sourceFile, `${targetFile}.txt`);
            }
        }),
    );

    console.log(chalk.cyan(`Pre-prepack: Copied ${relativeSourceFiles.length} files.`));
};

const copyApps = async () => {
    console.log(chalk.cyan('Pre-prepack: Copying files from template apps...'));

    const TEMPLATE_APP_PREFIX = 'forge-dev-kit-template-app-';
    const appDirectoryNames = await globby(`${TEMPLATE_APP_PREFIX}*`, {
        cwd: packagesDirectory,
        onlyDirectories: true,
    });

    await Promise.all(
        appDirectoryNames.map(async (appDirectoryName) => {
            const appName = appDirectoryName.substring(TEMPLATE_APP_PREFIX.length);
            const appDirectory = path.resolve(packagesDirectory, appDirectoryName);

            const relativeAppFiles = await globby(['**/*', '**/.*'], {
                cwd: appDirectory,
                ignore: ['node_modules', 'CHANGELOG.md'],
            });

            const targetPath = path.resolve(dirName, '../resources/apps', appName);

            await Promise.all(
                relativeAppFiles.map(async (relativeAppFile) => {
                    const appFile = path.resolve(appDirectory, relativeAppFile);
                    const targetFile = path.resolve(targetPath, relativeAppFile);
                    const targetDirectory = path.dirname(targetFile);
                    await fs.mkdir(targetDirectory, { recursive: true });
                    await fs.copyFile(appFile, `${targetFile}.txt`);
                }),
            );
        }),
    );

    console.log(chalk.cyan(`Pre-prepack: Copied ${appDirectoryNames.length} apps.`));
};

const run = async () => {
    await copyTemplate();
    await copyApps();
    process.exit(0);
};

run();
