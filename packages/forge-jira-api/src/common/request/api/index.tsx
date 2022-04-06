/* eslint-disable max-classes-per-file */

import isPlainObject from 'lodash/isPlainObject';

export type Options = {
    type?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: { [param: string]: unknown };
    experimental?: boolean;
};

export type Request = <TResult extends unknown>(url: string, options?: Options) => Promise<TResult>;

type ErrorResponse = {
    errorMessages: string[];
    warningMessages?: string[];
    errors?: Record<string, string>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isErrorResponse = (val: any): val is ErrorResponse =>
    val &&
    Array.isArray(val.errorMessages) &&
    (val.warningMessages === undefined || Array.isArray(val.warningMessages)) &&
    (val.errors === undefined || isPlainObject(val.errors));

type RequestErrorArgs<TResponse extends unknown> = {
    status: number;
    response: TResponse;
    url: string;
    method?: string;
    unexpected?: boolean;
};

class RequestError<TResponse extends unknown = unknown> extends Error {
    constructor({
        status,
        response,
        url,
        method = 'GET',
        unexpected,
    }: RequestErrorArgs<TResponse>) {
        super(
            unexpected
                ? `Request ${method} ${url} failed unexpectedly with status ${status}: ${
                      response || '(no response)'
                  }`
                : `Request ${method} ${url} failed with status ${status}`,
        );
        this.response = response;
        this.status = status;
    }

    status: number;

    response: TResponse;
}

export class APIError extends RequestError<ErrorResponse> {
    constructor(args: Omit<RequestErrorArgs<ErrorResponse>, 'unexpected'>) {
        super({ ...args, unexpected: false });
    }
}

export class UnexpectedError extends RequestError<unknown> {
    constructor(args: Omit<RequestErrorArgs<unknown>, 'unexpected'>) {
        super({ ...args, unexpected: true });
    }
}
