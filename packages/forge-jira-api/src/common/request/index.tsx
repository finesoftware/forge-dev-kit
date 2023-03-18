/* eslint-disable import/no-unresolved */

import { requestJira } from '@forge/bridge';

import { APIError, isErrorResponse, Options, Request, UnexpectedError } from './api';

const performRequest = async (url: string, options: Options = {}) => {
    try {
        return await requestJira(url, {
            method: options.type,
            body: options.data ? JSON.stringify(options.data) : undefined,
            headers: {
                'content-type': 'application/json',
            },
        });
    } catch (e) {
        const castedError = e as { code?: number; message?: unknown };

        throw new UnexpectedError({
            status: castedError.code ?? -1,
            response: castedError.message ?? e,
            url,
            method: options.type,
        });
    }
};

export const request: Request = async <TResult extends unknown>(
    url: string,
    options: Options = {},
) => {
    const result = await performRequest(url, options);

    const body = result.bodyUsed ? await result.json() : undefined;

    if (!result.ok) {
        if (isErrorResponse(body)) {
            throw new APIError({
                status: result.status ?? -1,
                response: body,
                url,
                method: options.type,
            });
        } else {
            throw new UnexpectedError({
                status: result.status ?? -1,
                response: body,
                url,
                method: options.type,
            });
        }
    }

    return body as TResult;
};
