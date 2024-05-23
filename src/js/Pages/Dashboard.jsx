import { useEffect, useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import '../../sass/dashboard.scss'
import axios from '@/libs/axios';

export default function Dashboard({ partenaires }) {

    const [auth, setAuth] = useState([]);

    useEffect(() =>{
        // Fonction asynchrone pour récupérer le user auth
        const fetchAuth = async() => {
          try {
            const response = await axios.get('/api/user')
            setAuth(response.data.data)
            console.log(response.data.data);
                        
          } catch (err) {
            console.error(err);
          }
        }
        fetchAuth();
    }, []);

    return (
        <>
            {/* <Head title="Dashboard admin" /> */}
            
            <DashboardLayout
                user={auth}
                partenaires={partenaires}
            >
            </DashboardLayout>


        
        </>
    );
}
