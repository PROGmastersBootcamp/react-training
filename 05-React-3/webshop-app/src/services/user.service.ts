import axios, {AxiosResponse} from 'axios';
import {UserModel} from '../models/user.model';

const serverUrl = `http://localhost:8080`;

export const loadAllUsers = (sliceStart: number, sliceEnd: number): Promise<AxiosResponse<UserModel[]>> => {
    return axios.get(`${serverUrl}/users?_start=${sliceStart}&_end=${sliceEnd}`);
};

export const loadUserDetails = (userId: number) => {
    return axios.get(`${serverUrl}/users/${userId}`);
};

export const createUser = (userData: any) => {
    return axios.post(`${serverUrl}/users`, userData);
};
