import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Grupo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navegador extends Component {
    render() {
    return (      
      <div className="header">
			<ul className="nav">
           
                
                <li><a className="nav-link" href="group">Grupos</a>
                     <ul>
                          <li><a className="nav-link" href="creategroup">Crear un nuevo grupo</a></li>
                          <li><a className="nav-link" href="unirsegroup">Unirse a un grupo</a></li>
                          <li><a className="nav-link" href="misgroup">Mis grupos</a></li>
                          <li><a className="nav-link" href="">Solicitudes</a></li>
                          <li><a className="nav-link" href="editgroup">Editar grupos</a></li>
                    </ul>
                    </li>
                </ul>
		</div>
      
    )
  }
}
export default Navegador;
