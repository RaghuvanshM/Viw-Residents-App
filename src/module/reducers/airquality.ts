import {createReducer} from 'redux-act';
import {airQualityIndex, setLocation} from '../actions/airquality';

export interface Coordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}
export interface Position {
  readonly coords: Coordinates;
  readonly timestamp: number;
}

export interface IAirQualityIndexReducer {
  airQualitydata: any;
  location?: Position;
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

airquality.on(setLocation, (state: IAirQualityIndexReducer, payload: any) => ({
  ...state,
  location: payload,
}));
