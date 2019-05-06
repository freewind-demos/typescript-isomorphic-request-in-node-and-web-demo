import '../index';
import {Method, JsonLike, Response} from '#request';
import req, {Response as Res} from 'request';

export default async function request<T>(method: Method, url: string, headers?: JsonLike, data?: JsonLike): Promise<Response<T>> {
  return new Promise<Response<T>>((resolve, reject) => {
    req({
      method: method,
      url: url,
      headers: headers,
      json: data
    }, (error: any, response: Res, body: any) => {
      if (error) {
        return reject({
          statusCode: response.statusCode,
          error: error
        })
      }

      resolve({
        statusCode: response.statusCode,
        data: body
      })
    })
  })
}
