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

export const updateUserApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axios.put('http://localhost:5000/api/v1/user/updateUser', data);
};

export const getHobbiesApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axios.get('http://localhost:5000/api/v1/hobby/getHobbies');
};

export const getHobbyByIdApi = async (id: string): Promise<AxiosResponse<any, any>> => {
  return await axios.get(`http://localhost:5000/api/v1/hobby/getHobbyById?id=${id}`);
};

export const createHobbyApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axios.post('http://localhost:5000/api/v1/hobby/createHobby', data);
};

export const deleteHobbyApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axios.delete('http://localhost:5000/api/v1/hobby/deleteHobby', { data });
};
