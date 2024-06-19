import { createContext } from 'react';
import { IRequestResult } from '../../models/Result';
import { RefListDto } from '../../api';

export interface IRefListStateContext{
    refList?: IRequestResult<RefListDto>;
}

export interface ISkillsErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  
export interface IRefListActionContext{
   getRefListByName?: ((name:string)=>void) | (()=>void);
}

export const RefListState  = createContext<IRefListStateContext>({} as IRefListStateContext);

export const RefListActions  = createContext<IRefListActionContext>({} as IRefListActionContext);
