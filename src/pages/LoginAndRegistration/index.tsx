import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppState } from '../../types/types';
import useForm from '../../hooks/useForm';
import {
  loginUserRequest,
  registerUserRequest,
} from '../../redux/actions/auth';

type FormElem = React.FormEvent<HTMLFormElement>;

const LoginAndRegistration = (): JSX.Element => {
  const [registerValues, handleRegisterChange] = useForm({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [loginValues, handleLoginChange] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, errors } = useSelector(
    (state: AppState) => state.authState,
  );

  const toggleForm = () => {
    const container = document.querySelector('.container') as Element; // TODO: move to utils
    container.classList.toggle('s--register');
  };

  const handleLoginSubmit = (e: FormElem): void => {
    e.preventDefault();
    const userData = {
      email: loginValues.email,
      password: loginValues.password,
    };
    dispatch(loginUserRequest(userData));
  };

  const handleRegisterSubmit = (e: FormElem): void => {
    e.preventDefault();
    const newUser = {
      _id: registerValues.id as string,
      firstName: registerValues.firstName as string,
      lastName: registerValues.lastName as string,
      email: registerValues.email,
      password: registerValues.password,
      role: registerValues.role as string,
    };
    dispatch(registerUserRequest(newUser));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  });

  return (
    <div className='container'>
      <form onSubmit={handleLoginSubmit} className='form py-5 login'>
        <h2>Welcome back</h2>

        <label>
          <input
            type='email'
            name='email'
            placeholder='eMail'
            value={loginValues.email}
            onChange={handleLoginChange}
          />
        </label>
        <p className='sm'>{errors ? <span>{errors.email}</span> : ''}</p>

        <label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={loginValues.password}
            onChange={handleLoginChange}
          />
        </label>
        <p className='sm'>{errors ? <span>{errors.password}</span> : ''}</p>

        <button type='submit' className='submit normal'>
          Login
        </button>
      </form>

      <div className='sub-container'>
        <div className='img'>
          <div className='img__text m--up'>
            <h2>Are you new here?</h2>

            <p>Register to gather more knowledge!</p>
          </div>
          <div className='img__text m--in'>
            <h2>Already registered?</h2>
            <p>Kindly login. We've missed you!</p>
          </div>

          <div className='img__btn normal' onClick={(e) => toggleForm()}>
            <span className='m--up'>Register</span>
            <span className='m--in'>Login</span>
          </div>
        </div>

        <form onSubmit={handleRegisterSubmit} className='form py-2 register'>
          <h2>Join us</h2>
          <label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={registerValues.firstName}
              onChange={handleRegisterChange}
            />
          </label>
          <p className='sm'>{errors ? <span>{errors.firstName}</span> : ''}</p>

          <label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={registerValues.lastName}
              onChange={handleRegisterChange}
            />
          </label>
          <p className='sm'>{errors ? <span>{errors.lastName}</span> : ''}</p>

          <label>
            <input
              type='email'
              name='email'
              placeholder='eMail'
              value={registerValues.email}
              onChange={handleRegisterChange}
            />
          </label>
          <p className='sm'>{errors ? <span>{errors.email}</span> : ''}</p>

          <label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={registerValues.password}
              onChange={handleRegisterChange}
            />
          </label>
          <p className='sm'>{errors ? <span>{errors.password}</span> : ''}</p>

          <button type='submit' className='submit normal'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAndRegistration;
