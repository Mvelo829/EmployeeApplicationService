/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTenantDto } from '../models/CreateTenantDto';
import type { TenantDto } from '../models/TenantDto';
import type { TenantDtoPagedResultDto } from '../models/TenantDtoPagedResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TenantService {

  /**
   * @param requestBody 
   * @returns TenantDto Success
   * @throws ApiError
   */
  public static postApiServicesAppTenantCreate(
requestBody?: CreateTenantDto,
): CancelablePromise<TenantDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Tenant/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppTenantDelete(
id?: number,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Tenant/Delete',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param id 
   * @returns TenantDto Success
   * @throws ApiError
   */
  public static getApiServicesAppTenantGet(
id?: number,
): CancelablePromise<TenantDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Tenant/Get',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param keyword 
   * @param isActive 
   * @param skipCount 
   * @param maxResultCount 
   * @returns TenantDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppTenantGetAll(
keyword?: string,
isActive?: boolean,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<TenantDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Tenant/GetAll',
      query: {
        'Keyword': keyword,
        'IsActive': isActive,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * @param requestBody 
   * @returns TenantDto Success
   * @throws ApiError
   */
  public static putApiServicesAppTenantUpdate(
requestBody?: TenantDto,
): CancelablePromise<TenantDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Tenant/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
