import {ISagaAction} from '../types';
import {SagaIterator} from 'redux-saga';
import {signInApi, testApi} from '../utils/Apis/user';
import {authUser, authFailed} from '../actions';
import {call, put} from 'redux-saga/effects';
import {ENV, ENV_TYPE} from '../utils/api-constants';
import Toast from 'react-native-toast-message';

export const signIn = function* (action: ISagaAction<any>): SagaIterator {
  try {
    const userDetails = yield call(signInApi, ENV[ENV_TYPE.DEV], {
      ...action.payload,
      role: 'customer',
    });
    console.log(userDetails);
    yield put(authUser(userDetails.data.data));
  } catch (e) {
    yield put(authFailed(e?.response?.data?.message));
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Incorrect email or password!',
      visibilityTime: 30000,
      position: 'bottom',
    });
  }
};

export const fakeAPicall = function*(): SagaIterator{
  try{
    const dummy = yield call(testApi)
   console.log(dummy)
  }catch(e){
 console.log(e)
  }
}