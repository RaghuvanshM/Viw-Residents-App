import * as reducers from '../reducers';
export interface IStoreState {
  readonly user: reducers.IUserReducer;
  readonly userManagement: reducers.IUserManagementReducer;
  readonly settings: reducers.ISettingsReducer;
}
