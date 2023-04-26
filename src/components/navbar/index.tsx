import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppState } from '../../types/types';

const NavBar = (): JSX.Element => {
  const { isAuthenticated } = useSelector((state: AppState) => state.authState);
  const user = useSelector((state: AppState) => state.authState.user);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <header>
      <div className='nav-logo' title='application title'>
        <Link to='/'>
          <p className='l engrave'>BOOK NOOK</p>
        </Link>
      </div>
      {user?.role === 'admin' ? (
        <Link to='/create-book' className='lead mx-2 engrave'>
          Create Book
        </Link>
      ) : (
        ''
      )}
      {isAuthenticated ? (
        <div className='nav-user'>
          {user?.role === 'admin' ? (
            <Link to='/users' className='lead mx-2 engrave'>
              Users
            </Link>
          ) : (
            <Link to='/borrowed' className='lead mx-2 engrave'>
              Borrowed
            </Link>
          )}
          <p className='lead mx-2 engrave'>
            {user?.firstName.charAt(0).toLocaleUpperCase() +
              user?.firstName.slice(1)}
          </p>
          <p className='google-btn logout' onClick={(e) => handleLogout()}>
            Logout
          </p>
        </div>
      ) : (
        <div className='nav-menu lead'>
          <Link to='/' className='engrave'>
            LIBRARY
          </Link>
          <Link to='/login' className='engrave'>
            LOGIN
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
