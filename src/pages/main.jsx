import { useState } from 'react';
import { v4 as uuid } from "uuid"
import Header from "../Component/Header/Header.jsx"
import Formularios from "../Component/Formulario/Formularios.jsx"
import MiOrg from "../Component/MiOrg/MiOrg.jsx"
import Equipo from "../Component/Equipo/Equipo.jsx";

import Footers from '../Component/Footer/Footer.jsx';

function Main1() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Pediatra",
    foto: "https://media.licdn.com/dms/image/D4D03AQHdrDngGxQcxg/profile-displayphoto-shrink_200_200/0/1680814409956?e=1704931200&v=beta&t=ElX8VQxaF_wo4dE63Cvrs3FeZTrNgLvu5bZiGF_WZzc",
    nombre: "Octavio Balverdi",
    descripcion: "exelente medico",
    },
    {
      id: uuid(),
      equipo: "Odontopediatra",
      foto: "https://media.licdn.com/dms/image/D4D03AQGToBjXWtHX8Q/profile-displayphoto-shrink_100_100/0/1682044052342?e=1702512000&v=beta&t=8y8veJEo2pt7BMZV895AkbBucS_I-f2VGEoplXhgZbA",
      nombre: "Roberto Sanchez",
      descripcion: "exelente medico",
    }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Pediatra",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Odontopediatra",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Gastroenterólogo",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Neurólogo",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "Neumonologo",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Traumatólogo",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Neonatologo",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

    //Actualizar color de equipo
    const actualizarColor = (color, id) => {
      const equiposActualizados = equipos.map((equipo) => {
        if (equipo.id === id) {
          equipo.colorPrimario = color
        }
  
        return equipo
      })
      actualizarEquipos(equiposActualizados)
    }

     //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  

  

  return (
    
    <div className='App'>
      <Header />
      {
        mostrarFormulario && <Formularios
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      {
        equipos.map((equipo) =>{ 
          return <Equipo datos={equipo} key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
        />
      })
      }
      <Footers />

    </div>
  );
}

export default Main1