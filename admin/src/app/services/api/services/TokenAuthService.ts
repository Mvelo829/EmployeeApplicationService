/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticateModel } from '../models/AuthenticateModel';
import type { AuthenticateResultModel } from '../models/AuthenticateResultModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokenAuthService {

  /**
   * @param requestBody 
   * @returns AuthenticateResultModel Success
   * @throws ApiError
   */
  public static postApiTokenAuthAuthenticate(
requestBody?: AuthenticateModel,
): CancelablePromise<AuthenticateResultModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/TokenAuth/Authenticate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
