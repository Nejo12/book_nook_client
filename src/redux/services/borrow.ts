import axios from 'axios';
import { url } from '../../Routes';

export const borrowService = async (_id: string) => {
  const BORROW_API_ENDPOINT = `${url}/api/borrows/all?userId=` + _id;

  try {
    const response = await axios.get(BORROW_API_ENDPOINT);
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
