import React, { FC, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { IPersonStateContext, personState, personActions, IPersonErrorResponse } from './context';
import { AxiosError } from 'axios';
import { CreatePersonDto, PersonService, SkillDto, SkillService } from '../../api';
import { json } from 'node:stream/consumers';
import { useSkill, useSkillState } from '../skillProvider';


const PersonProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [persons, setPersons] = useState<IPersonStateContext['persons']>();
  const [person, setPerson] = useState<IPersonStateContext['person']>();

  const createPerson = (payload: CreatePersonDto) => {
    setPerson({ state: 'loading' });
    PersonService.postApiServicesAppPersonCreate(payload).then((res: any) => {
      setPerson({ state: 'success', value: res['result'] })
      var skills: SkillDto[] = JSON.parse(localStorage.getItem('skills'));
      
      skills.map((skill) => {
        skill.personId = res['result'].id;
      })
      SkillService.postApiServicesAppSkillCreateSkills(skills).then((res) => {
        window.location.reload();
      }).catch((error: AxiosError<IPersonErrorResponse>) => {
        setPerson({ state: 'error', error: error?.response?.data });
      });
    }).catch((error: AxiosError<IPersonErrorResponse>) => {
      setPerson({ state: 'error', error: error?.response?.data });
    });
  };

  const updatePerson = (payload: CreatePersonDto) => {
    setPerson({ state: 'loading' });
    PersonService.putApiServicesAppPersonUpdate(payload).then((res: any) => {
      setPerson({ state: 'success', value: res['result'] })
      var skills: SkillDto[] = JSON.parse(localStorage.getItem('skills'));
      skills.map((skill) => {
        skill.personId = res['result'].id;
      })
      SkillService.putApiServicesAppSkillUpdateSkills(skills).then((res) => {
        window.location.reload();
      }).catch((error: AxiosError<IPersonErrorResponse>) => {
        setPerson({ state: 'error', error: error?.response?.data });
      });
    }).catch((error: AxiosError<IPersonErrorResponse>) => {
      setPerson({ state: 'error', error: error?.response?.data });
    });
  };


  const deletePerson = (id: string) => {
    setPerson({ state: 'loading' });
    PersonService.deleteApiServicesAppPersonDelete(id).then((res) => {
      setPerson({ state: 'loading' });
    }).catch((error: AxiosError<IPersonErrorResponse>) => {
      setPerson({ state: 'error', error: error?.response?.data });
    });
  };


  const getAllEmployees = () => {
    setPersons({ state: 'loading' });
    PersonService.getApiServicesAppPersonGetAll().then((res: any) => {
      console.log("resiTems", res['result']);
      setPersons({ state: 'success', value: res['result'] })
    }).catch((error: AxiosError<IPersonErrorResponse>) => {
      setPersons({ state: 'error', error: error?.response?.data });
    });
  };

  const memoizedState = useMemo(() => {
    return { persons, person };
  }, [persons, person]);

  const memoizedActions = useMemo(() => {
    return {
      deletePerson,
      createPerson,
      getAllEmployees,
      updatePerson
    };
  }, [createPerson, deletePerson, getAllEmployees,updatePerson]);

  return (
    <personState.Provider value={memoizedState}>
      <personActions.Provider value={memoizedActions}>{children}</personActions.Provider>
    </personState.Provider>
  )
};

const usePersonState = () => {
  const context = useContext(personState);
  return context;
};
const usePersonActions = () => {
  const context = useContext(personActions);
  return context;
};
const usePerson = () => {
  return { ...usePersonState(), ...usePersonActions() };
};

export { PersonProvider, usePerson, usePersonState, usePersonActions };
