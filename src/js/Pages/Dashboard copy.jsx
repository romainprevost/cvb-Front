import '../../sass/dashboard.scss'
import { useEffect, useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axios from '@/libs/axios';

import { useAuth } from '@/context/AuthContext'; // Importez useAuth


export default function Dashboard({ partenaires }) {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // État de chargement
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const response = await axios.get('/api/user'); // Effectuez la requête pour récupérer les données d'authentification
        setAuth(response.data.data); // Mettez à jour l'état avec les données d'authentification
        setLoading(false); // Marquez le chargement comme terminé
      } catch (error) {
        console.error('Une erreur s\'est produite : ', error);
        setLoading(false); // Marquez le chargement comme terminé, même en cas d'erreur
      }
    };

    fetchAuth(); // Appelez la fonction pour récupérer les données d'authentification lors du montage du composant
  }, []); // Le tableau de dépendances est vide, donc cette effectue uniquement lors du montage initial
  

  if (loading) {
    // Si le chargement est en cours, affichez un message de chargement
    return <div>Loading...</div>;
  }

  if (auth.length === 0) {
    // Si les données d'authentification ne sont pas disponibles, redirigez l'utilisateur vers la page de connexion
    navigate('/cvb-admin');
    return null;
  }
  
    return (
        <>
            {/* <Head title="Dashboard admin" /> */}
              <>
                <DashboardLayout partenaires={partenaires} />
              </>


        
        </>
    );
}
