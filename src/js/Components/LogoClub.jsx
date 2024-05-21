import {Link } from 'react-router-dom';
import React from 'react'

export default function LogoClub({ filePath }) {
  return (
    <div>
      <Link to='/'>
        <img className='logoClub' src={filePath} alt="logo CVB" />
      </Link>
    </div>
  )
}
