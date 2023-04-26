import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { AppState } from '../../types/types';
import { fetchUsers } from '../../redux/actions/user';
import UserCard from '../../components/userCard';

const Users = () => {
  const userList = useSelector((state: AppState) => state.userState.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='page-container p-2'>
      <p className='page-title lead emboss'>User List</p>
      {userList &&
        userList.map((user) => <UserCard key={uuidv4()} userData={user} />)}
    </div>
  );
};

export default Users;
