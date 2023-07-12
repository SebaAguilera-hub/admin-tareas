import React from "react";
import LogoReact from '../imagenes/logo.png'


function Logo(){
    return(
        <div className='contenedor-logo'>
          <img 
          src={LogoReact}
          alt='logo de react'
          className='logoReact'/>
      </div>
    )
}

export default Logo;