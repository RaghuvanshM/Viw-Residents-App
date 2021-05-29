import {createAction} from 'redux-act';
export const authUser = createAction<any>();
export const signOutUser = createAction();
export const signInUser = createAction<{email: string; password: string}>();
export const hideWelcomeInfo = createAction();
