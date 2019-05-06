import '../index';
import {Method, JsonLike, Response} from '#request';

import $ from 'jquery';
import SuccessTextStatus = JQuery.Ajax.SuccessTextStatus;
import jqXHR = JQuery.jqXHR;
import ErrorTextStatus = JQuery.Ajax.ErrorTextStatus;

export default async function request<T>(method: Method, url: string, headers?: JsonLike, data?: JsonLike): Promise<Response<T>> {
  return new Promise<Response<T>>((resolve, reject) => {
    $.ajax({
      url: url,
      method: method,
      headers: headers,
      data: data,
      success: (data: any, textStatus: SuccessTextStatus, jqXHR: jqXHR) => {
        resolve({
          statusCode: jqXHR.status,
          data: data
        })
      },
      error: (jqXHR: jqXHR, textStatus: ErrorTextStatus, errorThrown: string) => {
        reject({
          statusCode: jqXHR.status,
          error: errorThrown
        })
      }
    });
  })
}
