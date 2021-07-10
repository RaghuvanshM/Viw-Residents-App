import {takeLatest} from 'redux-saga/effects';
import * as airQuality from './airQuality';
import * as user from './user';
import * as zones from './zones';
import * as actions from '../actions';

export default function* rootSaga() {
  yield takeLatest(actions.getAirQualityIndex, airQuality.getAirQuality);
  yield takeLatest(actions.signInUser, user.signIn);
  yield takeLatest(actions.fakeapiCallH, user.fakeAPicall);
  yield takeLatest(actions.getZoneDetails, zones.getZoneDetails);
  yield takeLatest(actions.changeZoneNameAction, zones.setZoneName);
  yield takeLatest(actions.changeTintAction, zones.changeTintValue);
}
