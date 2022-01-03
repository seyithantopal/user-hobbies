import axios, { AxiosResponse } from 'axios';

export const getUsersApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axios.get('http://localhost:5000/api/v1/user/getUsers');
};

export const getUserByIdApi = async (id: string): Promise<AxiosResponse<any, any>> => {
  return await axios.get(`http://localhost:5000/api/v1/user/getUserById?id=${id}`);
};

export const createUserApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axios.post('http://localhost:5000/api/v1/user/createUser', data);
};

export const getHobbiesApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axios.get('http://localhost:5000/api/v1/hobby/getHobbies');
};

export const getHobbyByIdApi = async (id: string): Promise<AxiosResponse<any, any>> => {
  return await axios.get(`http://localhost:5000/api/v1/hobby/getHobbyById?id=${id}`);
};
