import logo from './logo.svg';
import './App.css';
import Logo from './componentes/Logo'
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="App">
       <Logo />  
       <div className='contenedor-principal-lista'>
           <h1>Mis Tareas</h1>
           <ListaDeTareas>
            
           </ListaDeTareas>
            
       </div>
    </div>
  );
}

export default App;
