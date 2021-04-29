import {IStoreState} from '../types';

export const getSelectedImage = (state: IStoreState) => state.settings.selectedImage;
export const getIsInternalImage = (state: IStoreState) => state.settings.isInternalImage;
