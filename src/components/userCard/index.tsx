import { Link } from 'react-router-dom';

import { UserProps } from '../../types/types';

const UserCard = (props: UserProps) => {
  const { _id, role, firstName, lastName, email } = props.userData;

  return (
    <div className='userContainer p-1'>
      <Link to={`/users/${_id}`}>
        <p className='sm'>{_id}</p>
      </Link>
      <br />
      <p>
        <span className='sm p-1'>Role: </span> {role}
      </p>
      <br />
      <p>
        <span className='sm p-1'>eMail: </span>
        {email}
      </p>
      <br />
      <p>
        <span className='sm p-1'>First Name: </span>
        {firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1)}
      </p>
      <br />
      <p>
        <span className='sm p-1'>Last Name: </span>
        {lastName.charAt(0).toLocaleUpperCase() + lastName.slice(1)}
      </p>
    </div>
  );
};

export default UserCard;
