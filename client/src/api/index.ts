import axios, { AxiosResponse } from 'axios';

export const getUsersApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axios.get('http://localhost:5000/api/v1/user/getUsers');
};

export const createUserApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axios.post('http://localhost:5000/api/v1/user/createUser', data);
};
