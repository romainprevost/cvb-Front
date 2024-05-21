import {Link } from 'react-router-dom';
import React from 'react'
import ButtonGold from './ButtonGold'
import moment from 'moment';


export default function Actualites({ firstActu, othersActu }) {
  return (
    <>
        <div className="actualites">
          <h2>LES ACTUALITÉS</h2>
          <div className="flex justify-center mt-10">
            <div className="first-actu">
              <Link to={route('actu.show', {actu: firstActu.id})}>
                <div className='relative'>
                    <img src={firstActu.photo} alt="main actus" />
                    <div class="filtre-img"></div>
                </div>
                <p className='ml-5 mt-1'>Le { moment(firstActu.created_at).locale('fr').format('DD/MM/YYYY') }</p>
                <h3 className='ml-5 mt-1'><strong> {firstActu.titre} </strong></h3>
              </Link>
            </div>
            
            <div className="others-actu flex flex-col gap-2 mt-8 ml-5">
              {
                Object.values(othersActu).map((actu) =>(
                  <div 
                  key={actu.id}
                  className='block-others-actus'>
                    <Link to={route('actu.show', {actu: actu.id})}>
                        <p className='ml-3'>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</p>
                        <h3 className='ml-3 mt-2'><strong> { actu.titre }</strong></h3>
                    </Link>                  
                  </div>
                ))
              }
              <ButtonGold
                href = {route('actu.index')}
                classNameButton = 'all-actus' 
                content = 'TOUTES LES ACTUS'
              />
            </div>
          </div>
        </div>
    </>
  )
}
