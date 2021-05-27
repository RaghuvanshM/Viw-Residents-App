import {applyMiddleware, combineReducers, createStore} from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
const rootReducer = combineReducers(reducers);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const Store: any = createStore(persistedReducer, applyMiddleware(thunk));
