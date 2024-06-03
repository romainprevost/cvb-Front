import './sass/welcome.scss'
import { useEffect, useState } from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext.jsx'; // Importez AuthProvider
import axios from '@/libs/axios';


import Welcome from '@/Pages/Welcome';
import Dashboard from './js/Pages/Dashboard';
//actualites
import Actualites from '@/Pages/Actualites/Actualites';
import Show from '@/Pages/Actualites/Show';
//divers
import Projet from '@/Pages/Divers/Projet';
import Historique from '@/Pages/Divers/Historique';
import Organigramme from '@/Pages/Divers/Organigramme';
import Reglement from '@/Pages/Divers/Reglement';
import Statuts from '@/Pages/Divers/Statuts';
import Planning from '@/Pages/Divers/Planning';
import Tarifs from '@/Pages/Divers/Tarifs';
import Modalites from '@/Pages/Divers/Modalites';
import ModeEmploiLicence from '@/Pages/Divers/ModeEmploiLicence';
import DocumentsDivers from '@/Pages/Divers/DocumentsDivers';
//equipes
import Equipes from '@/Pages/Equipe/Equipes';
//partenaires
import Partenaires from '@/Pages/Partenaires/Partenaires';
import DevenezPartenaire from '@/Pages/Partenaires/DevenezPartenaire';
//boutique
import Boutique from '@/Pages/Boutique/Boutique';
import Login from './js/Pages/Auth/Login';


function App() {

  return (
      <AuthProvider>        
        <Routes>
          <Route path='/' element={<Welcome />} />

          {/*---------------- Users ----------------*/}

          {/*---------------- Dashboard ----------------*/}
          <Route path='/cvb-admin' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />

          {/*---------------- Profil ----------------*/}
          <Route path='/profile' element={''} />


          {/*---------------- Actualites ----------------*/}
          <Route path='/actualites' element={<Actualites />} />
          <Route path='/actualite/:actu' element={<Show />} />

          {/*---------------- Equipes ----------------*/}
          <Route path='/equipe-senior/:equipe_id' element={<Equipes />} />

          {/*---------------- Divers ----------------*/}
          <Route path='/projet' element={<Projet />} />
          <Route path='/historique' element={<Historique />} />
          <Route path='/organigramme' element={<Organigramme />} />
          <Route path='/reglement' element={<Reglement />} />
          <Route path='/statuts' element={<Statuts />} />
          <Route path='/planning' element={<Planning />} />

          <Route path='/tarifs' element={<Tarifs />} />
          <Route path='/modalites' element={<Modalites />} />
          <Route path='/modeEmploiLicence' element={<ModeEmploiLicence />} />
          <Route path='/documentsDivers' element={<DocumentsDivers />} />

          {/*---------------- Partenaires ----------------*/}
          <Route path='/partenaires' element={<Partenaires />} />
          <Route path='/devenez-partenaire' element={<DevenezPartenaire />} />

          {/*---------------- Boutique ----------------*/}
          <Route path='/boutique' element={<Boutique />} />

        </Routes>
      </AuthProvider>
  )
}

export default App
