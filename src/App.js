import logo from './logo.svg';
import './App.css';
import Logo from './componentes/Logo'
import Tarea from './componentes/Tarea.js';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="App">
       <Logo />  
       <div className='contenedor-principal-lista'>
           <h1>Mis Tareas</h1>
            <Tarea texto='Aprender React'></Tarea>
            
       </div>
    </div>
  );
}

export default App;
