import {ISagaAction} from '../types';
import {SagaIterator} from 'redux-saga';
import {
  fetchZoneDetails,
  setTintApi,
  setZoneNameApi,
} from '../utils/Apis/zones';
import {
  failedToFetchZoneDetails,
  setZoneDetail,
  setZoneDetails,
  toggleSliderAction,
} from '../actions';
import {call, put, select, delay} from 'redux-saga/effects';
import {ENV, ENV_TYPE} from '../utils/api-constants';
import {getJwtToken, getSelectedZones, getUserProfile} from '../selectors';
import * as moment from 'moment';

export const getZoneDetails = function* (
  action: ISagaAction<any>,
): SagaIterator {
  try {
    const jwt = yield select(getJwtToken);
    const zoneDetails = yield call(
      fetchZoneDetails,
      ENV[ENV_TYPE.DEV],
      {
        buildingId: action?.payload?.buildingId || 'Network_6_415582',
      },
      jwt,
    );
    yield put(setZoneDetails(zoneDetails.data.data));
  } catch (e) {
    yield put(failedToFetchZoneDetails());
    console.error('error', e);
  }
};
export const setZoneName = function* (action: ISagaAction<any>): SagaIterator {
  try {
    const jwt = yield select(getJwtToken);
    const selectedZone = yield select(getSelectedZones);
    yield call(
      setZoneNameApi,
      ENV[ENV_TYPE.DEV],
      {
        name: action.payload,
        zoneId: selectedZone.uniqueId,
      },
      jwt,
    );
    selectedZone.name = action.payload;
    yield put(setZoneDetail(selectedZone));
  } catch (e) {
    yield put(failedToFetchZoneDetails());
    console.error('error', e);
  }
};

export const changeTintValue = function* (
  action: ISagaAction<any>,
): SagaIterator {
  try {
    const jwt = yield select(getJwtToken);
    const selectedZone = yield select(getSelectedZones);
    const user = yield select(getUserProfile);
    yield call(
      setTintApi,
      ENV[ENV_TYPE.DEV],
      {
        tintLevel: action.payload,
        tintAgent: selectedZone.snapshot.tintAgent,
        duration: 3600,
        comment: `set tint level ${action.payload}`,
        author: user.user.email,
        zoneId: selectedZone.uniqueId,
      },
      jwt,
    );
    selectedZone.snapshot.tintLevel = action.payload;
    selectedZone.snapshot.desiredDuration = 3600;
    selectedZone.snapshot.timestamp = moment().format();
    selectedZone.snapshot.remainingTime = 3599;
    yield put(setZoneDetail(selectedZone));
  } catch (e) {
    const selectedZone = yield select(getSelectedZones);
    yield put(toggleSliderAction(false));
    yield put(setZoneDetail(selectedZone));
    yield delay(250);
    yield put(toggleSliderAction(true));
    console.error('error', e);
  }
};
