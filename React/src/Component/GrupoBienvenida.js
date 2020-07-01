import React, {Component} from 'react';
import './Grupo.css';

class GrupoBienvenida extends Component{
  render(){
    return(
            <div className="Grupo" >
                
                <h1 className="Titulo">Bienvenido a los grupos de estudios!</h1>
                <br></br>
                <h2>¿Que podrá hacer en esta sección?</h2>
                
                <ol id="lista3">
                <li>Crear grupos de estudios</li>
                <li>Unirse a grupos de estudios</li>
                <li>Interactuar con sus compañeros!</li>
                
                </ol>

                <br></br>            
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-primary">CREAR</button>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-primary">UNIRSE</button>
                   
                </div>
                </div>
            </div>
    )
  }
}
export default GrupoBienvenida;