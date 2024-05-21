import {Link } from 'react-router-dom';

import React from 'react'
import ButtonGold from '../ButtonGold'
import "../../../sass/dashboard.scss"

export default function MenuNavbar({ /*auth*/ }) {
// console.log(auth.user);
  return (
    <>
      <div>
        <ul className='MenuNavbar mt-8'>
          <li>
            <Link to="/" className='itemMenu'>
            {/* <Link to={route('welcome')} className='itemMenu'> */}
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link to='/api/actualites' className='itemMenu'>
                <span>Actualités</span>
            </Link>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Le club</span>

                <div >
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link to='/projet'><li>Le projet</li></Link>
                    <Link to='/historique'><li>Historique</li></Link>
                    <Link to='/organigramme'><li>Organigramme</li></Link>
                    <Link to='/reglement'><li>Règlement intérieur</li></Link>
                    <Link to='/statuts'><li>Les statuts de l'association</li></Link>
                    <Link to='/planning'><li>Planning / entrainements</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Équipes Séniors</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    {/* <Link to={route('equipe.index', 2)}>Nationale 3 Masculine</Link> */}
                    <Link to='/api/equipe/2'><li>Nationale 3 Masculine</li></Link>
                    <Link to='/api/equipe/3'><li>Prénationale Masculine</li></Link>
                    <Link to='/api/equipe/4'><li>Régionale Masculine</li></Link>
                    <Link to='/api/equipe/8'><li>Régionale Féminine</li></Link>
                    <Link to="#"><li>Départementales Masculines</li></Link>
                    <Link to="#"><li>Départementale Féminine</li></Link>
                    <Link to='/api/equipe/1'><li>Ufolep</li></Link>
                    <Link to='/api/equipe/9'><li>Volley assis</li></Link>
                    <Link to="#"><li>Loisirs</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Équipes Jeunes</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-44'>
                  <ul>
                    <Link to="#"><li>M13 Masculins</li></Link>
                    <Link to="#"><li>M15 Masculins</li></Link>
                    <Link to="#"><li>M18 Féminines</li></Link>
                    <Link to="#"><li>M18 Masculins</li></Link>
                    <Link to="#"><li>M21 Masculins</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Partenaires</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-48'>
                  <ul>
                    <Link to='/api/partenaires'><li>Nos partenaires</li></Link>
                    <Link to='/devenez-partenaire'><li>Devenez partenaire</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Inscriptions</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link to='/tarifs'><li>Tarifs</li></Link>
                    <Link to='/modalites'><li>Modalités d'inscription</li></Link>
                    <Link to='/modeEmploiLicence'><li>Comment remplir sa licence</li></Link>
                    <Link to='/documentsDivers'><li>Documents divers</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li>
            <Link to='/boutique' className='itemMenu'>
              <span>Boutique</span>
            </Link>
          </li>
          {/* {auth.user!=null && ( */}
            <ButtonGold 
              href='/dashboard'
              content="Admin"
              classNameButton="bouton-admin"
            />
          {/* )} */}
        </ul>
      </div>
    </>
  )
}

                    