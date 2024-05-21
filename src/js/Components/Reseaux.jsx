import {Link } from 'react-router-dom';
import React from 'react'
import ButtonGold from './ButtonGold'

export default function Reseaux() {
  return (
    <>
        <div className="reseaux">
            <h2 className=''>SUIVEZ-NOUS SUR LES RESEAUX SOCIAUX</h2>
            <div className='flex justify-center gap-36 mb-24'>
              <a href="https://www.facebook.com/cvbofficiel" target='_blank'>
                <img src="assets/icones/big-facebook.png" alt="facebook club" />
              </a>
              <a href="https://www.instagram.com/caenvolleyball/" target='_blank'>
                <img src="assets/icones/big-instagram.png" alt="Instagram Club" />
              </a>
            </div>
            <div className='flex justify-center'>
                <ButtonGold
                    href = '/api/actualites'
                    classNameButton = 'button-post' 
                    content = 'Voir nos dernières actualités'
                />
            </div>
        </div>
    </>
  )
}
