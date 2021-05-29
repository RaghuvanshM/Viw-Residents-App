import {call, put} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {getAirQualityApi, getCurrentLocation} from '../utils/Apis/airQuality';
import {airQualityIndex, setLocation} from '../actions';

export const getAirQuality = function* (): SagaIterator {
  try {
    const position = yield call(getCurrentLocation);
    yield put(setLocation(position));

    const airQuality = yield call(getAirQualityApi, {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    yield put(airQualityIndex({airQualitydata: airQuality.data.data}));
  } catch (e) {
    console.error('error', e);
  }
};
