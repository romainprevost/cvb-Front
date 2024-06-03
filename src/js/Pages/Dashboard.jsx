import '../../sass/dashboard.scss'
import { useEffect, useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext'; // Importez useAuth

export default function Dashboard({ partenaires }) {
  const { auth, loading } = useAuth(); // recupere le contexte d'authentification
  const navigate = useNavigate();1424

  console.log(auth);

    // Si le chargement est terminé et l'utilisateur n'est pas connecté en tant qu'administrateur
    if (!loading && !auth) {
      // Redirigez l'utilisateur vers la page de connexion
      navigate('/cvb-admin');
      return null;
    }


    return (
        <>
          {loading && <div>Loading...</div>}
            {/* <Head title="Dashboard admin" /> */}
              <>
                <DashboardLayout
                    partenaires={partenaires}
                >
                </DashboardLayout>
              </>


        
        </>
    );
}
