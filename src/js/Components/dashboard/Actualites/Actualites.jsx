import React from 'react'
import ButtonAddActu from './ButtonAddActu'
import ListeActus from './ListeActus'

export default function Actualites() {


  return (
    <>
      <div className="">
        <ButtonAddActu />
      </div>
      <div className="liste-actus mt-24">
        <ListeActus />
      </div>
    </>
  )
}
