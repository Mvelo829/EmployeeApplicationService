/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressDto } from '../models/AddressDto';
import type { AddressDtoPagedResultDto } from '../models/AddressDtoPagedResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AddressService {

  /**
   * @param id 
   * @returns AddressDto Success
   * @throws ApiError
   */
  public static getApiServicesAppAddressGet(
id?: string,
): CancelablePromise<AddressDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Address/Get',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param sorting 
   * @param skipCount 
   * @param maxResultCount 
   * @returns AddressDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppAddressGetAll(
sorting?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<AddressDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Address/GetAll',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * @param requestBody 
   * @returns AddressDto Success
   * @throws ApiError
   */
  public static postApiServicesAppAddressCreate(
requestBody?: AddressDto,
): CancelablePromise<AddressDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Address/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns AddressDto Success
   * @throws ApiError
   */
  public static putApiServicesAppAddressUpdate(
requestBody?: AddressDto,
): CancelablePromise<AddressDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Address/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppAddressDelete(
id?: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Address/Delete',
      query: {
        'Id': id,
      },
    });
  }

}
