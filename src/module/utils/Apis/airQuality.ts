import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {BREEZOMETER_API_KEY, BREEZOMETER_BASE_URL} from '../api-constants';
import {Position} from '../../reducers';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export const getCurrentLocation = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This App needs access to your location ' +
            'so we can know where you are.',
          buttonPositive: 'Yes',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use locations ');
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        }).then(data => {
          console.log(data);
          Geolocation.getCurrentPosition(
            (position: Position) => {
              resolve(position);
            },
            err => {
              reject(err);
            },
            {enableHighAccuracy: false},
          );
        });
      } else {
        reject({error: 'Location permission not granted.'});
      }
    } catch (err) {
      console.warn(err);
    }
  });
};

export const getAirQualityApi = async (payload: any) => {
  return axios.get(
    `${BREEZOMETER_BASE_URL}air-quality/v2/current-conditions?lat=${payload.latitude}&lon=${payload.longitude}&key=${BREEZOMETER_API_KEY}`,
  );
};
