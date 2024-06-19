import { createContext } from 'react';
import { IRequestResult } from '../../models/Result';
import { CreatePersonDto, CreatePersonDtoPagedResultDto } from '../../api';

export interface IPersonStateContext{
    persons?: IRequestResult<CreatePersonDtoPagedResultDto>;
    person?: IRequestResult<CreatePersonDto>;
}

export interface IPersonErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  
export interface IPersonActionContext{
   createPerson?:(payload:CreatePersonDto)=>void;
   updatePerson?:(payload:CreatePersonDto)=>void;
   getAllEmployees?:()=>void;
   deletePerson?:(id:string)=>void;
}

export const personState  = createContext<IPersonStateContext>({} as IPersonStateContext);

export const personActions  = createContext<IPersonActionContext>({} as IPersonActionContext);
