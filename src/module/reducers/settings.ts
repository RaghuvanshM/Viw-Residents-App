import {createReducer} from 'redux-act';
import {changeImage} from '../actions/settings';

export interface ISettingsReducer {
  selectedImage: string;
  isInternalImage: boolean;
}

const initialState = {
  selectedImage: 'initialWelnessHeader',
  isInternalImage: true,
};

export const settings = createReducer<ISettingsReducer>({}, initialState);
settings.on(
  changeImage,
  (state: ISettingsReducer, payload: ISettingsReducer) => ({
    ...state,
    selectedImage: payload.selectedImage,
    isInternalImage: payload.isInternalImage,
  }),
);
