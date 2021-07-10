import axios from 'axios';
import {APIUrl} from '../api-constants';

export const signInApi = async (baseUrl: string, payload: any) => {
  let emailheader = {
    'Content-Type': 'application/json',
  };
  return axios.post(`${baseUrl}${APIUrl.login}`, payload, {
    headers: emailheader,
  });
};


export const testApi = async()=>{
  return axios.get(APIUrl.fakeurl)
}