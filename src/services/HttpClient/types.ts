export type THttpURL = string;
export type THttpHeaders = RequestInit['headers'];
export type THttpData = Object;
export type THttpMethod = 'GET'| 'POST' | 'DELETE' |'PUT';

export interface IHttpClientRequest {
    url: THttpURL,
    method: THttpMethod,
    data?: THttpData,
    headers?: THttpHeaders,
    query?: string,
}

export interface IHttpClient {
    baseUrl: THttpURL;
    get: (url: THttpURL, query?: string, headers?: THttpHeaders) => Promise<any>;
    delete: (url: THttpURL, headers?: THttpHeaders) => Promise<any>;
    post: (url: THttpURL, data: THttpData, headers?: THttpHeaders) => Promise<any>;
    put: (url: THttpURL, data: THttpData, headers?: THttpHeaders) => Promise<any>;
    request: (params: IHttpClientRequest)  => Promise<any>;
    setQueryParams:(query: string) => void;
}