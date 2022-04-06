/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from 'react';

import uniqueId from 'lodash/uniqueId';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

type HookResult<TFunction extends (...args: any) => any> = SWRResponse<
    ReturnType<TFunction> extends Promise<infer U> ? U : ReturnType<TFunction>
>;

type Options = { skip?: boolean; noCache?: boolean } & Omit<SWRConfiguration, 'fetcher'>;

export type HookType<TFunction extends any> =
    /* first, handle non-parameterized requests */
    TFunction extends () => any
        ? /* parameter *may* be optional */
          Parameters<TFunction>[0] extends undefined
            ? (args?: undefined, options?: Options) => HookResult<TFunction>
            : (args?: Parameters<TFunction>[0], options?: Options) => HookResult<TFunction>
        : /* second, handle parameterized requests */
        TFunction extends (args: infer U, ...moreArgs: never) => any
        ? (args: U, options?: Options) => HookResult<TFunction>
        : never;

export const toSWRHook = <TFunction extends (args: any) => any>(
    request: TFunction,
    factoryLevelOptions: Options | undefined = undefined,
): HookType<TFunction> => {
    const key = uniqueId('swr-hook-');

    // this is too much for TS or my understanding of TS
    // @ts-expect-error
    return (args: any = undefined, options: Options = {}) => {
        const { skip, noCache, ...restOptions } = { ...factoryLevelOptions, ...options };

        const mountKey = useMemo(() => uniqueId(`${key}-`), []);

        return useSWR(
            !skip ? { key, ...(noCache ? { mountKey } : undefined), args } : null,
            async () => request(args),
            Object.keys(restOptions).length > 0 ? restOptions : undefined,
        );
    };
};
