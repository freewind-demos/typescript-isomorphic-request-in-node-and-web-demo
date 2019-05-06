declare module "#request" {
  export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

  export type JsonLike = {
    [key: string]: any
  }

  export type Response<T> = {
    statusCode: number,
    error?: any,
    data?: T
  }

  export default function <T>(method: Method, url: string, headers?: JsonLike, data?: JsonLike): Promise<Response<T>>;
}
