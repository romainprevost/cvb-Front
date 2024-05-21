import React from 'react'
import Caroussel from './Caroussel'


export default function Partenaires({partners}) {
  return (
    <>
      <div className="partenaires">
        <h2 className=''>LES PARTENAIRES</h2>
        <div className="flex justify-center mt-10">
          <Caroussel partners={partners}/>
        </div>
      </div>
    </>
  )
}
