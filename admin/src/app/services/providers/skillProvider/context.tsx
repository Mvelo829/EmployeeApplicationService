import { createContext } from 'react';
import { IRequestResult } from '../../models/Result';
import { SkillDto, SkillDtoPagedResultDto } from '../../api';

export interface ISkillsStateContext{
    skillSet?: IRequestResult<SkillDtoPagedResultDto>;
    skills?: IRequestResult<SkillDto[]>;
    allSkills?: IRequestResult<SkillDtoPagedResultDto>;
}

export interface ISkillsErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  
export interface ISkillsActionContext{
   createSkill?:(payload:SkillDto[])=>void;
   getSkills?:(personId:string)=>void;
   getAllSkills?:()=>void;
   deleteSkill?:(id:string)=>void;
}

export const SkillState  = createContext<ISkillsStateContext>({} as ISkillsStateContext);

export const SkillActions  = createContext<ISkillsActionContext>({} as ISkillsActionContext);
