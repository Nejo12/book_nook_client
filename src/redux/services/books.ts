import axios from 'axios';

import { url } from '../../Routes';
import { BookState } from '../../types/types';

export const fetchBooksService = async () => {
  const BOOK_API_ENDPOINT: string = `${url}/api/books`;
  try {
    const response: BookState = await axios.get(BOOK_API_ENDPOINT);
    const data = response;
    return data;
  } catch (error) {
    throw error;
  }
};
