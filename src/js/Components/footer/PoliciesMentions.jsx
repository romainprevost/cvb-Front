import React from 'react'

export default function PoliciesMentions() {
  return (
    <>
        <div className='mt-16 flex justify-center gap-48'>
            <ul className='mentions flex text-white gap-8'>
                <li><a href="">Mentions légales</a></li>
                <li><a href="">Politique de cookies</a></li>
            </ul>

            <div className='reseaux-sociaux flex gap-8'>
                <a target='_blank' rel="stylesheet" href="https://www.instagram.com/caenvolleyball/">
                    <img className='' src="/assets/icones/instagram.png" alt="instagram" />
                </a>
                <a target='_blank' rel="stylesheet" href="https://www.facebook.com/cvbofficiel/">
                    <img className='' src="/assets/icones/facebook.png" alt="facebook" />
                </a>        
            </div>
            <div className="sign flex gap-8">
                <p className='text-white'>2024 © Tous droits réservés. Caen Volley Ball</p>
                <p className='text-white'><a href="https://www.nicolas-reitin.fr" target='_blank'>Site by NR</a></p>
            </div>
        </div>
    </>
  )
}
