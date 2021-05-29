import {createReducer} from 'redux-act';
import {
  setZoneDetails,
  getZoneDetails,
  failedToFetchZoneDetails,
  selectZone,
  setZoneDetail,
  toggleSliderAction,
  signOutUser,
} from '../actions';
import cloneDeep from 'lodash/cloneDeep';

export interface IZoneProps {
  deviceType: string;
  commissioned: boolean;
  status: string;
  floors: string[];
  uniqueId: string;
  buildingId: string;
  logicalId: string;
  name: string;
  serial: string;
  platformId: string;
  groupId: string;
  createdAt: string;
  updatedAt: string;
  snapshot: {
    desiredDuration: number;
    desiredTintLevel: number;
    remainingTime: number;
    timestamp: string;
    tintAgent: number;
    tintLevel: number;
    tintState: number;
  };
  timeline: [];
}
export interface IZoneReducer {
  zones: IZoneProps[];
  selectedZone?: IZoneProps;
  showSlider: boolean;
  fetching: boolean;
}
const initialState = {
  zones: [],
  showSlider: true,
  fetching: false,
};

export const zones = createReducer<IZoneReducer>({}, initialState);
zones.on(setZoneDetails, (state: IZoneReducer, payload: any) => ({
  ...state,
  zones: payload,
  fetching: false,
}));
zones.on(setZoneDetail, (state: IZoneReducer, payload: IZoneProps) => {
  const clonedZones = cloneDeep(state.zones);
  const selectedZoneIndex = clonedZones.findIndex(
    x => x.uniqueId === payload.uniqueId,
  );
  clonedZones[selectedZoneIndex] = payload;
  return {
    ...state,
    clonedZones,
    fetching: false,
  };
});
zones.on(getZoneDetails, (state: IZoneReducer) => ({
  ...state,
  fetching: true,
}));
zones.on(failedToFetchZoneDetails, (state: IZoneReducer) => ({
  ...state,
  fetching: false,
}));

zones.on(selectZone, (state: IZoneReducer, payload: IZoneProps) => ({
  ...state,
  selectedZone: payload,
}));
zones.on(toggleSliderAction, (state: IZoneReducer, payload: boolean) => ({
  ...state,
  showSlider: payload,
}));

zones.on(signOutUser, () => initialState);
