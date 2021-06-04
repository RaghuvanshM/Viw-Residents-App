import {createReducer} from 'redux-act';
import {
  authUser,
  authFailed,
  hideWelcomeInfo,
  signInUser,
  signOutUser,
} from '../actions';

export interface IUserProfile {
  access_token: string;
  refresh_token: string;
  user: {
    roles: string[];
    authenticator: string;
    firstName: string;
    lastName: string;
    email: string;
    uniqueId: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IUserReducer {
  isAuth: boolean;
  profile: IUserProfile;
  showWelcomeInfo: boolean;
  isError: boolean;
  isSubmit: boolean;
}

const initialState = {
  isAuth: false,
  showWelcomeInfo: true,
  isError: false,
  isSubmit: false,
  profile: {
    access_token: '',
    refresh_token: '',
    user: {
      roles: [],
      authenticator: '',
      firstName: '',
      lastName: '',
      email: '',
      uniqueId: '',
      createdAt: '',
      updatedAt: '',
    },
  },
};

export const user = createReducer<IUserReducer>({}, initialState);
user.on(authUser, (state: IUserReducer, payload: IUserProfile) => {
  return {
    ...state,
    isAuth: true,
    profile: payload,
    isSubmit: false,
  };
});
user.on(hideWelcomeInfo, (state: IUserReducer) => ({
  ...state,
  showWelcomeInfo: false,
}));
user.on(hideWelcomeInfo, (state: IUserReducer) => ({
  ...state,
  showWelcomeInfo: false,
}));
user.on(authFailed, (state: IUserReducer) => ({
  ...state,
  isError: true,
  isSubmit: false,
}));
user.on(signInUser, (state: IUserReducer) => ({
  ...state,
  isSubmit: true,
}));
user.on(signOutUser, () => {
  return initialState;
});
