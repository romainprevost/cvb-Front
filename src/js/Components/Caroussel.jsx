import React from 'react'

import '../../sass/caroussel.scss'  


export default function Caroussel({partners}) {
    const translationMultiplier = partners.length; // Valeur dynamique que vous souhaitez utiliser

  return (
    <>
        <div class="slider">
            <div class="slide-track" style={{ '--translation-multiplier': translationMultiplier }}>
                {
                    partners.map((partner)=> (
                        <div key={partner.id} class="slide">
                            <img src={partner.logo} height="100" width="250" alt={partner.nom}/>
                        </div>
                    ))
                    
                } 
                {/* double des div pour enchainement du carousel*/}
                {
                    partners.map((partner)=> (
                        <div key={partner.id} class="slide">
                            <img src={partner.logo} height="100" width="250" alt={partner.nom}/>
                        </div>
                    ))
                }     
            </div>
        </div>
    </>
  )
}




