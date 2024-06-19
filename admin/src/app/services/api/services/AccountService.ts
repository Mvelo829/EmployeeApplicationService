/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IsTenantAvailableInput } from '../models/IsTenantAvailableInput';
import type { IsTenantAvailableOutput } from '../models/IsTenantAvailableOutput';
import type { RegisterInput } from '../models/RegisterInput';
import type { RegisterOutput } from '../models/RegisterOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

  /**
   * @param requestBody 
   * @returns IsTenantAvailableOutput Success
   * @throws ApiError
   */
  public static postApiServicesAppAccountIsTenantAvailable(
requestBody?: IsTenantAvailableInput,
): CancelablePromise<IsTenantAvailableOutput> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Account/IsTenantAvailable',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns RegisterOutput Success
   * @throws ApiError
   */
  public static postApiServicesAppAccountRegister(
requestBody?: RegisterInput,
): CancelablePromise<RegisterOutput> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Account/Register',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
