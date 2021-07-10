import {createAction} from 'redux-act';
import {IZoneProps} from '../reducers';

export const setZoneDetails = createAction<any>();

export const setZoneDetail = createAction<IZoneProps>();

export const getZoneDetails = createAction<any>();

export const failedToFetchZoneDetails = createAction();

export const selectZone = createAction<IZoneProps>();

export const changeZoneNameAction = createAction<string>();

export const changeTintAction =
  createAction<{tint: number; duration: number}>();

export const toggleSliderAction = createAction<boolean>();
