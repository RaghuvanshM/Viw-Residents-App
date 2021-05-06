import {IStoreState} from '../types';
export const getUserManagementList = (state: IStoreState) =>
  state.userManagement.users;
export const getShowAddUserManagement = (state: IStoreState) =>
  state.userManagement.isAddUser;
