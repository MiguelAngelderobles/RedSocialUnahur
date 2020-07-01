import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navegador from './Component/Navegador';
import GrupoBienvenida from './Component/GrupoBienvenida';
import CrearGrupo from './Component/CrearGrupo';
import UnirseAUnGrupo from './Component/UnirseAUnGrupo';
import EditarGrupo from './Component/EditarGrupo';
import MiGrupo from './Component/MiGrupo';


class App extends Component {
  render() {
    return (
   
      <Router>
   
        <Navegador/>
        <Route path="/group" component={GrupoBienvenida} />
        <Route path="/creategroup" component={CrearGrupo} />
        <Route path="/unirsegroup" component={UnirseAUnGrupo} />
        <Route path="/editgroup" component={EditarGrupo} />
        <Route path="/misgroup" component={MiGrupo} />

      </Router>
        
    )
  }
}
export default App;
