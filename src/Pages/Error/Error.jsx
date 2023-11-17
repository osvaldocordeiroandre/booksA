import React from 'react'

import { NavLink } from 'react-router-dom'

import './error.css'

export default function Error() {
  return (

    <div className="containerError">

      <img width={200} src="https://www.16leaves.com/public/images/404.png" alt="" />

      <NavLink to={'/'}><button> Home </button></NavLink>

    </div>

  )
}
