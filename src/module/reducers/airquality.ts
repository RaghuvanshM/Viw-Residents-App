import {createReducer} from 'redux-act';
import {airQualityIndex} from '../actions/airquality';

export interface IAirQualityIndexReducer {
  airQualitydata: object;
}

const initialState = {
  airQualitydata: {},
};

export const airquality = createReducer<IAirQualityIndexReducer>(
  {},
  initialState,
);
airquality.on(
  airQualityIndex,
  (state: IAirQualityIndexReducer, payload: IAirQualityIndexReducer) => ({
    ...state,
    airQualitydata: payload.airQualitydata,
  }),
);
