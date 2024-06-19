/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlatPermissionDto } from './FlatPermissionDto';
import type { RoleEditDto } from './RoleEditDto';

export type GetRoleForEditOutput = {
  role?: RoleEditDto;
  permissions?: Array<FlatPermissionDto> | null;
  grantedPermissionNames?: Array<string> | null;
};
