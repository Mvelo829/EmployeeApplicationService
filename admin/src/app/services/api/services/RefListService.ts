/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefListDto } from '../models/RefListDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RefListService {

  /**
   * @returns RefListDto Success
   * @throws ApiError
   */
  public static getApiServicesAppRefListGetAllRefLists(): CancelablePromise<Array<RefListDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/RefList/GetAllRefLists',
    });
  }

  /**
   * @param name 
   * @returns RefListDto Success
   * @throws ApiError
   */
  public static getApiServicesAppRefListGetRefListByName(
name?: string,
): CancelablePromise<RefListDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/RefList/GetRefListByName',
      query: {
        'Name': name,
      },
    });
  }

}
