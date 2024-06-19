import React, { FC, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { ISkillsStateContext,SkillState ,SkillActions, ISkillsErrorResponse} from './context';
import { AxiosError } from 'axios';
import { SkillDto, SkillService } from '../../api';


const SkillProvider:FC<PropsWithChildren<any>> = ({children}) =>{
  const [skillSet, setsSkillSet] = useState<ISkillsStateContext['skillSet']>();
  const [skills, setSkills] = useState<ISkillsStateContext['skills']>();
  const [allSkills, setAllSkills] = useState<ISkillsStateContext['allSkills']>();

  const createSkill =  (payload: SkillDto[]) => {
    setSkills({ state: 'loading' });
    SkillService.postApiServicesAppSkillCreateSkills(payload).then((res:any) => {
      setSkills({ state: 'success', value:res['result']})
    }).catch((error: AxiosError<ISkillsErrorResponse>) => {
      setSkills({ state: 'error', error: error?.response?.data }); 
    });
  };

  const getSkills =  (personId:string) => {
    setsSkillSet({ state: 'loading' });
    SkillService.getApiServicesAppSkillGetAllSkillByPersonId(personId).then((res:any) => {
      
      setsSkillSet({ state: 'success', value: res['result']})
    }).catch((error: AxiosError<ISkillsErrorResponse>) => {
      setsSkillSet({ state: 'error', error: error?.response?.data }); 
    });
  };

  const getAllSkills =  () => {
    debugger
    setAllSkills({ state: 'loading' });
    SkillService.getApiServicesAppSkillGetAll().then((res) => {
      setAllSkills({ state: 'success', value: res['result']})
    }).catch((error: AxiosError<ISkillsErrorResponse>) => {
      setAllSkills({ state: 'error', error: error?.response?.data }); 
    });
  };


  const deleteSkill =  (personId:string) => {
    setsSkillSet({ state: 'loading' });
    SkillService.deleteApiServicesAppSkillDelete(personId).then((res:any) => {
      setsSkillSet({ state: 'success' });
    }).catch((error: AxiosError<ISkillsErrorResponse>) => {
      setsSkillSet({ state: 'error', error: error?.response?.data }); 
    });
  };

  const memoizedState = useMemo(() => {
    return { skillSet, skills,allSkills};
  }, [skillSet,skills,allSkills]);

  const memoizedActions = useMemo(() => {
    return {
      createSkill,
      getAllSkills,
      getSkills,
      deleteSkill,
      
    };
  }, [createSkill,getSkills,deleteSkill,getAllSkills]);

  return (
    <SkillState.Provider value={memoizedState}>
    <SkillActions.Provider value={memoizedActions}>{children}</SkillActions.Provider>
    </SkillState.Provider>
  )  
};

const useSkillState = () => {
    const context = useContext(SkillState);
    return context;
  };
  const useSkillActions = () => {
    const context = useContext(SkillActions);
    return context;
  };
  const useSkill = () => {
    return { ...useSkillState(), ...useSkillActions() };
  };
  
  export { SkillProvider, useSkill, useSkillState, useSkillActions };
