import React, { FC, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { IRefListStateContext,RefListState ,RefListActions, ISkillsErrorResponse} from './context';
import { AxiosError } from 'axios';
import { RefListService } from '../../api';


const RefListProvider:FC<PropsWithChildren<any>> = ({children}) =>{
  const [refList, setRefList] = useState<IRefListStateContext['refList']>();

  const getRefListByName =  (name:string) => {
    setRefList({ state: 'loading' });
    RefListService.getApiServicesAppRefListGetRefListByName(name).then((res:any) => {
      setRefList({ state: 'success', value: res['result']})
    }).catch((error: AxiosError<ISkillsErrorResponse>) => {
      setRefList({ state: 'error', error: error?.response?.data }); 
    });
  };

  const memoizedState = useMemo(() => {
    return {refList};
  }, [refList]);

  const memoizedActions = useMemo(() => {
    return {
      getRefListByName
    };
  }, [getRefListByName]);

  return (
    <RefListState.Provider value={memoizedState}>
    <RefListActions.Provider value={memoizedActions}>{children}</RefListActions.Provider>
    </RefListState.Provider>
  )  
};

const useRefListState = () => {
    const context = useContext(RefListState);
    return context;
  };
  const useRefListActions = () => {
    const context = useContext(RefListActions);
    return context;
  };
  const useRefList = () => {
    return { ...useRefListState(), ...useRefListActions() };
  };
  
  export { RefListProvider, useRefList, useRefListState, useRefListActions };
