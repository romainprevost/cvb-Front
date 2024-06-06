import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useNavigate } from 'react-router-dom';
import axios from '@/libs/axios';

import { useAuth } from '@/context/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const submit = async(e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            const response = await axios.post('/api/cvb-login', data)
            console.log(response.data);
            if (response.status === 200) {
                if (response.data.loginSuccessful === true) {
                    // console.log('Login successful:', response.data.user_role);
                    login({ user_role: response.data.user_role }); // Utilisez le rôle de l'utilisateur dans la réponse
                    navigate(response.data.redirect_url);
                }                        
            }
          } catch (err) {
            // if (err.response) {
            //     setErrors(err.response.data.errors || {});
            // } else {
            //     console.error('An error occurred:', err);
            // }
            setProcessing(false);
          }

    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        
        <GuestLayout>
            {/* <Head title="Log in" /> */}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={handleChange}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">                    
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Login
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
