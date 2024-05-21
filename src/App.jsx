import './sass/welcome.scss'
import { Router, Routes, Route, Link } from 'react-router-dom';

import Welcome from '@/Pages/Welcome';
import Test from '@/Pages/Test';
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
//boutiqie
import Boutique from '@/Pages/Boutique/Boutique';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />

        {/*---------------- Users ----------------*/}
        <Route path='/api/users' element={<Test />} />
        {/*---------------- Dashboard ----------------*/}
        <Route path='/cvb-admin' element={''} />

        {/*---------------- Actualites ----------------*/}
        <Route path='/api/actualites' element={<Actualites />} />
        <Route path='/api/actualite/:actu' element={<Show />} />

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

        {/*---------------- Equipes ----------------*/}
        <Route path='/api/equipes/:equipe' element={<Equipes />} />

        {/*---------------- Partenaires ----------------*/}
        <Route path='/api/partenaires' element={<Partenaires />} />
        <Route path='/devenez-partenaire' element={<DevenezPartenaire />} />

        {/*---------------- Boutique ----------------*/}
        <Route path='/boutique' element={<Boutique />} />


      </Routes>
    </>
  )
}

export default App
