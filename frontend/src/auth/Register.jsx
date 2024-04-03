import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillSliders } from 'react-icons/ai';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';

import loginImage from '../data/login.webp';

const Register = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleValueChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_REGISTER_URL}`, form);

            if (response.status === 200) {
                const resp = response.data;
                console.log(resp)
                navigate('/');
            }
        } catch (error) {
            console.error('API call failed', error);
        }
        setIsLoading(false);
    };

    const handleOldUser = () => {
        navigate('/');
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

                            <h1 className="text-3xl mt-8 font-extrabold tracking-tight dark:text-white text-orange-700">Register</h1>
                            <form className="w-full flex flex-col pt-4 p-12" onSubmit={handleSubmit}>
                                <div>
                                    <TextBoxComponent
                                        placeholder="First Name"
                                        cssClass="e-outline"
                                        floatLabelType="Auto"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleValueChange}
                                        type='text'
                                        style={{ width: '320px', height: '48px' }}
                                    />
                                </div>
                                <div className='mt-4 w-full'>
                                    <TextBoxComponent
                                        placeholder="Last Name"
                                        cssClass="e-outline"
                                        floatLabelType="Auto"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleValueChange}
                                        type='text'
                                        style={{ width: '320px', height: '48px' }}
                                    />
                                </div>
                                <div className='mt-4 w-full'>
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
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    style={{ background: 'cyan', color: 'black', borderRadius: '12px' }}
                                    className={`mt-4 text-l p-3 hower:drop-shadow-l`}
                                >
                                    {isLoading ? 'Registering...' : 'Register'}
                                </button>
                                <button className='text-green-500 mt-4 text-l' onClick={handleOldUser} >Have An Account?</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;