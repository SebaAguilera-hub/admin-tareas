import React from "react";
import '../hojas-de-estilo/TareaFormulario.css'

function TareaFormulario(props){
    return(
      <form className="tarea-formuario">
        <input 
        className="tarea-input"
        type="text"
        placeholder="Nueva Tarea"
        name="text" />
        <button className="tarea-boton">
           Agregar tarea
        </button>
      </form>
    )
}


export default TareaFormulario;