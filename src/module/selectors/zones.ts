import {IStoreState} from '../types';

export const getZones = (state: IStoreState) => state.zones.zones;
export const getSelectedZones = (state: IStoreState) =>
  state.zones.selectedZone;
export const isSliderShowing = (state: IStoreState) => state.zones.showSlider;
