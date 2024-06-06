import '../../sass/dashboard.scss'
import { useEffect } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext'; // Importez useAuth

export default function Dashboard({ partenaires }) {
  const { adminIsLogin, loading  } = useAuth(); // recupere le contexte d'authentification
  const navigate = useNavigate();
  
  useEffect(() => {
    // Si l'utilisateur n'est pas connecté en tant qu'administrateur, redirigez-le
    if (!loading && !adminIsLogin) {
      navigate('/cvb-admin');
    }
  }, [adminIsLogin, loading, navigate]);

  // Si les données sont encore en train de se charger, afficher un indicateur de chargement
  if (loading) {
    return <div>Loading...</div>;
  }

  //Si l'utilisateur n'est pas connecté en tant qu'administrateur, retournez null pour ne pas rendre le composant
  if (!adminIsLogin) {
    return null;
  }

  return (
    <>
      {adminIsLogin && (
        <DashboardLayout partenaires={partenaires} />
      )} 
    </>
  );
  
}
