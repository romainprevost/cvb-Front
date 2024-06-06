import '../../sass/dashboard.scss'
import { useEffect } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext'; // Importez useAuth

export default function Dashboard() {
  const { adminIsLogged, loading  } = useAuth(); // recupere le contexte d'authentification
  const navigate = useNavigate(); //fonction de react-router pour diriger vers une autre page en SPA
  
  useEffect(() => {
    // Si l'utilisateur n'est pas connecté en tant qu'administrateur, renvoi vers la page de formulaire de login
    if (!loading && !adminIsLogged) { // vérifie aussi que l'appel de current user est tterminée via loading
      navigate('/cvb-admin');
    }
  }, [adminIsLogged, loading, navigate]); // attentif a la modification des fonctions ci-contres

  // Si les données sont encore en train de se charger, afficher un indicateur de chargement
  if (loading) { //si loading encore en cours, on met un spinner/loader en attendant
    return <div>Loading...</div>;
  }

  //Si l'utilisateur n'est pas connecté en tant qu'administrateur, retournez null pour ne pas rendre le composant
  if (!adminIsLogged) {
    return null;
  }

  return (
    <>
      {adminIsLogged && (
        <DashboardLayout />
      )} 
    </>
  );
  
}
