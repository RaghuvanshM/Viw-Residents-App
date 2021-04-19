import {IStoreState} from '../types';

export const getIsUserAuth = (state: IStoreState) => state.user.isAuth;
export const getUserProfile = (state: IStoreState) => state.user.profile;
