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
    const navigate = useNavigate(); //fonction de react-router pour diriger vers une autre page en SPA
    const { login } = useAuth(); //utilisation de la fonction login depuis le AuthContext
    const [data, setData] = useState({ //stocker des données saisies du formulaire de log
        email: '',
        password: '',
        remember: false,
    });
    const [errors, setErrors] = useState({}); //stock l'etat des erreurs
    const [processing, setProcessing] = useState(false); // pour desactiver le bouton log une fois le bouton cliquer une premiere fois, pour eviter le spam de requete

    const submit = async(e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            const response = await axios.post('/api/cvb-login', data)
            // console.log(response.data);
            if (response.status === 200) {
                if (response.data.loginSuccessful === true) {
                    // console.log('Login successful:', response.data.user_role);
                    login(response.data.user); // Utilisez l'utilisateur dans la réponse
                    navigate(response.data.redirect_url);
                    // window.location.href = response.data.redirect_url;
                }                        
            }
          } catch (err) {
            if (err.response) {
                setErrors(err.response.data.errors || {});
            } else {
                console.error('An error occurred:', err);
            }
            setProcessing(false);
          }

    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
            // stock les valeurs recuperées par le formulaire pour les stocker dans le state data
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
