import React, { useState, useEffect } from 'react';
import '../Assets/CSS/Login.css';
import logo from '../Assets/images/mountain and bird/bird-black.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';

function Login() {
  // Regex
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex = /^.{8,}$/;

  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for tracking login status

  const Dispatch = useDispatch();

  // to Navigate
  const Nav = useNavigate();

  const handleOnEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnPassword = (e) => {
    setPassword(e.target.value);
  };

  const checkEmail = () => {
    setEmailValid(emailRegex.test(email));
  };

  const checkPassword = () => {
    setPasswordValid(passwordRegex.test(password));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    checkEmail();
    checkPassword();

    if (emailValid === true && passwordValid === true && email.trim() !== '' && password.trim() !== '') {
      // Perform your authentication logic here, e.g., checking credentials on the server.
      const isAuthenticated = true;

      if (isAuthenticated) {
        // Store login status in local storage and state.
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);

        // Store credentials in local storage.
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
      } else {
        // Handle invalid login.
        console.log('Invalid login');
      }
    }
    // Check if the localStorage contains the username and password
      if (localStorage.getItem('email') && localStorage.getItem('password')) {
        // After storing email and password in local storage, dispatch the login action
        Dispatch(login({ email, password }));
        Nav('/dash');
      }

  };

  useEffect(() => {
    // Check for stored credentials in local storage.
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedLoginStatus = localStorage.getItem('isLoggedIn');

    if (storedEmail && storedPassword && storedLoginStatus === 'true') {
      // Auto-fill the email and password fields.
      setEmail(storedEmail);
      setPassword(storedPassword);

      // Update the state to indicate that the user is logged in.
      setIsLoggedIn(true);

      // Redirect the user to the dashboard.
      Nav('/dash');
    }
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-40 w-auto" src={logo} alt="spam-shield" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleOnEmail}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!emailValid && flag !== false ? <span style={{ color: 'red' }}>Invalid Email</span> : ''}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleOnPassword}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!passwordValid && flag !== false ? <span style={{ color: 'red' }}>Invalid Password</span> : ''}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-black-500">
            Not yet Registered?{' '}
            <a href="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
