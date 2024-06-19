/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordDto } from '../models/ChangePasswordDto';
import type { ChangeUserLanguageDto } from '../models/ChangeUserLanguageDto';
import type { CreateUserDto } from '../models/CreateUserDto';
import type { Int64EntityDto } from '../models/Int64EntityDto';
import type { ResetPasswordDto } from '../models/ResetPasswordDto';
import type { RoleDtoListResultDto } from '../models/RoleDtoListResultDto';
import type { UserDto } from '../models/UserDto';
import type { UserDtoPagedResultDto } from '../models/UserDtoPagedResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

  /**
   * @param requestBody 
   * @returns UserDto Success
   * @throws ApiError
   */
  public static postApiServicesAppUserCreate(
requestBody?: CreateUserDto,
): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/User/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns UserDto Success
   * @throws ApiError
   */
  public static putApiServicesAppUserUpdate(
requestBody?: UserDto,
): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/User/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppUserDelete(
id?: number,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/User/Delete',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param requestBody 
   * @returns any Success
   * @throws ApiError
   */
  public static postApiServicesAppUserActivate(
requestBody?: Int64EntityDto,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/User/Activate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns any Success
   * @throws ApiError
   */
  public static postApiServicesAppUserDeActivate(
requestBody?: Int64EntityDto,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/User/DeActivate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns RoleDtoListResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppUserGetRoles(): CancelablePromise<RoleDtoListResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/User/GetRoles',
    });
  }

  /**
   * @param requestBody 
   * @returns any Success
   * @throws ApiError
   */
  public static postApiServicesAppUserChangeLanguage(
requestBody?: ChangeUserLanguageDto,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/User/ChangeLanguage',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns boolean Success
   * @throws ApiError
   */
  public static postApiServicesAppUserChangePassword(
requestBody?: ChangePasswordDto,
): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/User/ChangePassword',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns boolean Success
   * @throws ApiError
   */
  public static postApiServicesAppUserResetPassword(
requestBody?: ResetPasswordDto,
): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/User/ResetPassword',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns UserDto Success
   * @throws ApiError
   */
  public static getApiServicesAppUserGet(
id?: number,
): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/User/Get',
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
   * @returns UserDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppUserGetAll(
keyword?: string,
isActive?: boolean,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<UserDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/User/GetAll',
      query: {
        'Keyword': keyword,
        'IsActive': isActive,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

}
