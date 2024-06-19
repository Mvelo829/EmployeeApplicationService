/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeUiThemeInput } from '../models/ChangeUiThemeInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConfigurationService {

  /**
   * @param requestBody 
   * @returns any Success
   * @throws ApiError
   */
  public static postApiServicesAppConfigurationChangeUiTheme(
requestBody?: ChangeUiThemeInput,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Configuration/ChangeUiTheme',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
