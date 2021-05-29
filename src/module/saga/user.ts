import {ISagaAction} from '../types';
import {SagaIterator} from 'redux-saga';
import {signInApi} from '../utils/Apis/user';
import {authUser} from '../actions';
import {call, put} from 'redux-saga/effects';
import {ENV, ENV_TYPE} from '../utils/api-constants';

export const signIn = function* (action: ISagaAction<any>): SagaIterator {
  try {
    const userDetails = yield call(signInApi, ENV[ENV_TYPE.DEV], {
      ...action.payload,
      role: 'customer',
    });
    yield put(authUser(userDetails.data.data));
  } catch (e) {
    console.error('error', e);
  }
};
