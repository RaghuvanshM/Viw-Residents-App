export const APIUrl = {
  login: '/v1/auth/login',
  sensorZone: '/v1/sensor/zones?buildingId=',
  setSensorZoneName: '/v1/devices/zones/',
};
export const ENV_TYPE = {
  DEV: 'Development',
  QA: 'Gcloud QA',
  DEMO: 'Gcloud Demo',
  PROD: 'Prod',
};
export const ENV: any = {
  ['Development']: 'https://api-development.viewcorp.xyz/api',
  ['Gcloud QA']: 'https://api-qa.viewcorp.xyz/api',
  ['Gcloud Demo']: 'https://api-demo.viewcorp.xyz/api',
  ['Prod']: 'https://api.view.com/api',
};
export const BREEZOMETER_API_KEY = 'e55c933e40744918b0a26d7d1820e0be';
export const BREEZOMETER_BASE_URL = 'https://api.breezometer.com/';
