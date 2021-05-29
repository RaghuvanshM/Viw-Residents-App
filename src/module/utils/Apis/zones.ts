import axios from 'axios';
import {APIUrl} from '../api-constants';

export const fetchZoneDetails = async (
  baseUrl: string,
  payload: {buildingId: string},
  jwt: string,
) => {
  let emailheader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  };
  return axios.get(`${baseUrl}${APIUrl.sensorZone}${payload.buildingId}`, {
    headers: emailheader,
  });
};

export const setZoneNameApi = async (
  baseUrl: string,
  payload: {name: string; zoneId: string},
  jwt: string,
) => {
  let emailheader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  };
  return axios.patch(
    `${baseUrl}${APIUrl.setSensorZoneName}${payload.zoneId}`,
    {name: payload.name},
    {
      headers: emailheader,
    },
  );
};

export const setTintApi = async (
  baseUrl: string,
  payload: {
    tintLevel: string;
    tintAgent: string;
    duration: number;
    comment: string;
    author: string;
    zoneId: string;
  },
  jwt: string,
) => {
  let emailheader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  };
  return axios.put(
    `${baseUrl}${APIUrl.setSensorTint}${payload.zoneId}`,
    payload,
    {
      headers: emailheader,
    },
  );
};
