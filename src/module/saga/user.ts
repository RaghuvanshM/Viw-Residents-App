import {ISagaAction} from '../types';
import {SagaIterator} from 'redux-saga';
import {signInApi} from '../utils/Apis/user';
import {authUser, handleError, handleSubmit} from '../actions';
import {call, put} from 'redux-saga/effects';
import {ENV, ENV_TYPE} from '../utils/api-constants';
import Toast from 'react-native-toast-message';
export const signIn = function* (action: ISagaAction<any>): SagaIterator {
  try {
    yield put(handleSubmit());
    const userDetails = yield call(signInApi, ENV[ENV_TYPE.DEV], {
      ...action.payload,
      role: 'customer',
    });
    console.log(userDetails);
    yield put(authUser(userDetails.data.data));
  } catch (e) {
    yield put(handleError());
    Toast.show({
      type: 'error',
      text1: 'something went wrong',
      visibilityTime: 10000,
      position: 'bottom',
    });
  }
};
