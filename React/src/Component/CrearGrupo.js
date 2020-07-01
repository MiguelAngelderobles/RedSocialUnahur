import React, { Component } from 'react';
import './Grupo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class CrearGrupo extends Component {

  

  render() {
    return (
      <form className="CrearGrupo">
        <div class="form-group">
          <h4 className="TituloBuscarGrupo"><strong>Crear Grupo</strong></h4>
          <br></br>
          <label for="exampleFormControlInput1">Nombre del grupo</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese el nombre del grupo a crear" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Descripcion</label>
          <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Ingrese una descripcion para el grupo" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Cantidad de Participantes</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Materias a la que aplicara el grupo</label>
          <select class="form-control" id="exampleFormControlSelect2">
            <option>Programacion 1</option>
            <option>Programacion 2</option>
            <option>Base de Datos</option>
            <option>Ingles</option>
            <option>Matematica 2</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Privacidad</label>
          <select class="form-control" id="exampleFormControlSelect3">
            <option>Publico</option>
            <option>Privado</option>

          </select>
        </div>

        <div className="btn-group mr-3" role="group" aria-label="Second group">
          <button type="button" className="btn btn-primary botoncrear">Crear Grupo</button>

        </div>

      </form>

    );
  }
}

export default CrearGrupo;