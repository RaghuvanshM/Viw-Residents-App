import {createReducer} from 'redux-act';
import {authUser, signOutUser} from '../actions';

export interface IUserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserReducer {
  isAuth: boolean;
  profile: IUserProfile;
}

const initialState = {
  isAuth: false,
  profile: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  },
};

export const user = createReducer<IUserReducer>({}, initialState);
user.on(authUser, (state: IUserReducer, payload: IUserProfile) => ({
  ...state,
  isAuth: true,
  profile: payload,
}));
user.on(signOutUser, (state: IUserReducer) => ({
  ...state,
  isAuth: false,
  profile: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  },
}));
