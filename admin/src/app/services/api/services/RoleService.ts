/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoleDto } from '../models/CreateRoleDto';
import type { GetRoleForEditOutput } from '../models/GetRoleForEditOutput';
import type { PermissionDtoListResultDto } from '../models/PermissionDtoListResultDto';
import type { RoleDto } from '../models/RoleDto';
import type { RoleDtoPagedResultDto } from '../models/RoleDtoPagedResultDto';
import type { RoleListDtoListResultDto } from '../models/RoleListDtoListResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RoleService {

  /**
   * @param requestBody 
   * @returns RoleDto Success
   * @throws ApiError
   */
  public static postApiServicesAppRoleCreate(
requestBody?: CreateRoleDto,
): CancelablePromise<RoleDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Role/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param permission 
   * @returns RoleListDtoListResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppRoleGetRoles(
permission?: string,
): CancelablePromise<RoleListDtoListResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Role/GetRoles',
      query: {
        'Permission': permission,
      },
    });
  }

  /**
   * @param requestBody 
   * @returns RoleDto Success
   * @throws ApiError
   */
  public static putApiServicesAppRoleUpdate(
requestBody?: RoleDto,
): CancelablePromise<RoleDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Role/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppRoleDelete(
id?: number,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Role/Delete',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @returns PermissionDtoListResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppRoleGetAllPermissions(): CancelablePromise<PermissionDtoListResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Role/GetAllPermissions',
    });
  }

  /**
   * @param id 
   * @returns GetRoleForEditOutput Success
   * @throws ApiError
   */
  public static getApiServicesAppRoleGetRoleForEdit(
id?: number,
): CancelablePromise<GetRoleForEditOutput> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Role/GetRoleForEdit',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param id 
   * @returns RoleDto Success
   * @throws ApiError
   */
  public static getApiServicesAppRoleGet(
id?: number,
): CancelablePromise<RoleDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Role/Get',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param keyword 
   * @param skipCount 
   * @param maxResultCount 
   * @returns RoleDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppRoleGetAll(
keyword?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<RoleDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Role/GetAll',
      query: {
        'Keyword': keyword,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

}
