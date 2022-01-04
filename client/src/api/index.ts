import { AxiosResponse } from 'axios';
import axiosInstance from '../api/mocks'

export const getUsersApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get('user/getUsers');
};

export const getUserByIdApi = async (id: string): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get(`user/getUserById?id=${id}`);
};

export const createUserApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.post('user/createUser', data);
};

export const updateUserApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.put('user/updateUser', data);
};

export const getHobbiesApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get('hobby/getHobbies');
};

export const getHobbyByIdApi = async (id: string): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get(`hobby/getHobbyById?id=${id}`);
};

export const createHobbyApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.post('hobby/createHobby', data);
};

export const deleteHobbyApi = async (data: any): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.delete('hobby/deleteHobby', { data });
};
