import {createAction} from 'redux-act';
import {IUserManagement} from '../reducers';

export const addUserManagement = createAction<IUserManagement>();
export const editUserManagement = createAction<IUserManagement>();
export const toggleAddNewUser = createAction<boolean>();
