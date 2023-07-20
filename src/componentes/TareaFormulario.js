import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import '../hojas-de-estilo/TareaFormulario.css'

function TareaFormulario(props){
   
  const [input, setInput] = useState("")

  const manejarCambio = e => {
    //mantendra al input actualizado
    setInput(e.target.value);
   
  }

  const manejarEnvio = e => {
    e.preventDefault();
   
    // objeto que representa tarea nueva
    const tareaNueva ={
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva)
  }

    return(
      <form className="tarea-formuario" onSubmit={manejarEnvio}>
        <input 
        className="tarea-input"
        type="text"
        placeholder="Nueva Tarea"
        name="text"
        onChange={manejarCambio} 
        />

        <button className="tarea-boton">
           Agregar tarea
        </button>
      </form>
    )
}


export default TareaFormulario;