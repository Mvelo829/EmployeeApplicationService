/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetCurrentLoginInformationsOutput } from '../models/GetCurrentLoginInformationsOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionService {

  /**
   * @returns GetCurrentLoginInformationsOutput Success
   * @throws ApiError
   */
  public static getApiServicesAppSessionGetCurrentLoginInformations(): CancelablePromise<GetCurrentLoginInformationsOutput> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Session/GetCurrentLoginInformations',
    });
  }

}
