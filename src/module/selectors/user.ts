import {IStoreState} from '../types';

export const getIsUserAuth = (state: IStoreState) => state.user.isAuth;
export const getUserProfile = (state: IStoreState) => state.user.profile;
export const getJwtToken = (state: IStoreState) =>
  state.user?.profile?.access_token || '';
export const getWelcomeInfoShow = (state: IStoreState) =>
  state.user.showWelcomeInfo;
export const getErrorValue = (state: IStoreState) => state.user.isError;
export const getSubmitValue = (state: IStoreState) => state.user.isSubmit;
