/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillDto } from '../models/SkillDto';
import type { SkillDtoPagedResultDto } from '../models/SkillDtoPagedResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkillService {

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static postApiServicesAppSkillCreate(
requestBody?: SkillDto,
): CancelablePromise<SkillDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Skill/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static postApiServicesAppSkillCreateSkills(
requestBody?: Array<SkillDto>,
): CancelablePromise<Array<SkillDto>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Skill/CreateSkills',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static putApiServicesAppSkillUpdate(
requestBody?: SkillDto,
): CancelablePromise<SkillDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Skill/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static putApiServicesAppSkillUpdateSkills(
requestBody?: Array<SkillDto>,
): CancelablePromise<Array<SkillDto>> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Skill/UpdateSkills',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static getApiServicesAppSkillGet(
id?: string,
): CancelablePromise<SkillDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Skill/Get',
      query: {
        'Id': id,
      },
    });
  }

  /**
   * @param sorting 
   * @param skipCount 
   * @param maxResultCount 
   * @returns SkillDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppSkillGetAll(
sorting?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<SkillDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Skill/GetAll',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * @param personId 
   * @param sorting 
   * @param skipCount 
   * @param maxResultCount 
   * @returns SkillDtoPagedResultDto Success
   * @throws ApiError
   */
  public static getApiServicesAppSkillGetAllSkillByPersonId(
personId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<SkillDtoPagedResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Skill/GetAllSkillByPersonId',
      query: {
        'PersonId': personId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppSkillDelete(
id?: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Skill/Delete',
      query: {
        'Id': id,
      },
    });
  }

}
