import axios from 'axios'
import { url } from '../../Routes'

export const fetchUserService = async () => {
  const USER_API_URL = `${url}/api/users`

  const response = await axios.get(USER_API_URL)
  const data = response.data.data
  return data
}