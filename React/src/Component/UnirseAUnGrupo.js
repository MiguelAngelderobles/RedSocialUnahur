import React, { Component } from 'react';
import './Grupo.css';

class UnirseAUnGrupo extends Component {
  render() {
    return (

      <div className="box TituloBuscarGrupo">

        <div className="container-1 ">

          <h5><strong>Buscar Grupos</strong></h5>
          <span class="icon"><i class="fa fa-search"></i></span>
          <input type="search" id="search" placeholder="Buscar..." />
          <br></br>


        </div>

        <div className="card card-body Tarjeta">
          <p>De acuerdo a las materias que se encuentre cursando, le recomendamos los siguientes grupos:</p>
        </div>


        <section className="section Unirse">
          
         
          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Programacion</cuadros>
              <p><button>Unirse</button></p>
            </div>
          </div>
        
          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Historia</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>

          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Matematica</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>

          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Ingles 2</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>
          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Programacion 2</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>

          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Matematica 1</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>
          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Ingles 2</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>
          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Bae de datos</cuadros>
              <p><button>Lleno</button></p>
            </div>
          </div>
          <div class="cards">
            <div class="card">
            <cuadros className="cuadros">Programacion 3</cuadros>
              <p><button>Unirse</button></p>
            </div>
          </div>
        </section>

      </div>


    )
  }
}
export default UnirseAUnGrupo;