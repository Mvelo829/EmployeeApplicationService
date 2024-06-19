/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationInfoDto } from './ApplicationInfoDto';
import type { TenantLoginInfoDto } from './TenantLoginInfoDto';
import type { UserLoginInfoDto } from './UserLoginInfoDto';

export type GetCurrentLoginInformationsOutput = {
  application?: ApplicationInfoDto;
  user?: UserLoginInfoDto;
  tenant?: TenantLoginInfoDto;
};
