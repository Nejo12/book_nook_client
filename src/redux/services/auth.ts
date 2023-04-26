import axios from 'axios';
import { url } from '../../Routes';
import { AuthState } from '../../types/types';

export const registerUserService = async (form: any) => {
  const REGISTER_API_ENDPOINT = `${url}/api/users/register`;

  const formData = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    password: form.password,
  };

  try {
    const response: AuthState = await axios.post(
      REGISTER_API_ENDPOINT,
      formData,
    );
    return response.user;
  } catch (err) {
    throw err;
  }
};

export const loginUserService = async (form: any) => {
  const LOGIN_API_ENDPOINT = `${url}/api/users/login`;

  const formData = {
    email: form.email,
    password: form.password,
  };

  try {
    const response = await axios.post(LOGIN_API_ENDPOINT, formData);
    const data = await response.data;
    return data;
  } catch (err) {
    throw err;
  }
};
