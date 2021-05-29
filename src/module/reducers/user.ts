import {createReducer} from 'redux-act';
import {authUser, hideWelcomeInfo, signOutUser} from '../actions';

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
}

const initialState = {
  isAuth: false,
  showWelcomeInfo: true,
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
  };
});
user.on(hideWelcomeInfo, (state: IUserReducer) => ({
  ...state,
  showWelcomeInfo: false,
}));
user.on(signOutUser, () => {
  return initialState;
});
