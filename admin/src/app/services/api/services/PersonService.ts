/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePersonDto } from '../models/CreatePersonDto';
import type { CreatePersonDtoPagedResultDto } from '../models/CreatePersonDtoPagedResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PersonService {

  /**
   * @param requestBody 
   * @returns CreatePersonDto Success
   * @throws ApiError
   */
  public static postApiServicesAppPersonCreate(
requestBody?: CreatePersonDto,
): CancelablePromise<CreatePersonDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Person/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns CreatePersonDto Success
   * @throws ApiError
   */
  public static putApiServicesAppPersonUpdate(
requestBody?: CreatePersonDto,
): CancelablePromise<CreatePersonDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Person/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param sorting 
   * @param skipCount 
   * @param maxResultCount 
   * @returns CreatePersonDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppPersonGetAll(
sorting?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<CreatePersonDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Person/GetAll',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * @param id 
   * @returns CreatePersonDto Success
   * @throws ApiError
   */
  public static getApiServicesAppPersonGet(
id?: string,
): CancelablePromise<CreatePersonDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Person/Get',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppPersonDelete(
id?: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Person/Delete',
      query: {
        'Id': id,
      },
    });
  }

}
