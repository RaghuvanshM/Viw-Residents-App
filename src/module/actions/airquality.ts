import {createAction} from 'redux-act';
import {IAirQualityIndexReducer} from '../reducers';
export const airQualityIndex = createAction<IAirQualityIndexReducer>();

export const setLocation = createAction<any>();

export const getAirQualityIndex = createAction();
