import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillSliders } from 'react-icons/ai';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';

import loginImage from '../data/login.webp';
import { useStateContext } from '../contexts/ContextProvider';
import JwtUtils from '../utils/JwtUtils';

const Login = () => {
  const { setAuthenticated, setUserInfo } = useStateContext();

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValueChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_LOGIN_URL}`, form);

      if (response.status === 200) {
        setErrorMessage("");
        const resp = response.data;
        localStorage.setItem('token', JSON.stringify(resp));
        const decodedPayload = JwtUtils.decodeToken(resp);
        setUserInfo(decodedPayload.data)
        navigate('/dashboard');
        setAuthenticated(true);
      } else {
        setErrorMessage("Username and Password didn't Match");
      }
    } catch (error) {
      console.error('API call failed', error);
      setErrorMessage("Username and Password didn't Match");
    }
    setIsLoading(false);
  };

  const handleNewUser = () => {
    navigate('/register');
  }

  return (
    <section>
      <div className='flex lg:flex-row flex-col gap-4'>
        <div className='flex lg:flex-row flex-col lg:w-[70%] sm:w-full'>
          <img src={loginImage} className='w-full h-screen bg-center bg-cover bg-dunes' />
        </div>
        <div className='flex lg:flex-row flex-col lg:w-[30%] sm:w-full lg:p-12 p-4 items-center justify-center mt-12'>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="items-center flex flex-col gap-1 text-5xl font-extrabold tracking-tight dark:text-white text-cyan-700">
                <AiFillSliders /> <span>Venture Vista</span>
              </div>

              <h1 className="text-3xl mt-8 font-extrabold tracking-tight dark:text-white text-orange-700">Login</h1>
              <form className="w-full flex flex-col pt-4 p-12" onSubmit={handleSubmit}>
                <div>
                  <TextBoxComponent
                    placeholder="Email"
                    cssClass="e-outline"
                    floatLabelType="Auto"
                    name="email"
                    value={form.email}
                    onChange={handleValueChange}
                    type='text'
                    style={{ width: '320px', height: '48px' }}
                  />
                </div>
                <div className='mt-4 w-full'>
                  <TextBoxComponent
                    placeholder="Password"
                    cssClass="e-outline"
                    floatLabelType="Auto"
                    name="password"
                    value={form.password}
                    onChange={handleValueChange}
                    type='password'
                    style={{ width: '320px', height: '48px' }}
                  />
                </div>
                {errorMessage &&
                  <p className='text-red-500 pt-4 text-center'>Username and Password didn't Match!</p>
                }
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ background: 'cyan', color: 'black', borderRadius: '12px' }}
                  className={`mt-4 text-l p-3 hower:drop-shadow-l`}
                >
                  {isLoading ? 'Logining In...' : 'Login'}
                </button>
                <button className='text-gray-500 mt-4 text-l' onClick={handleNewUser} >New User?</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login