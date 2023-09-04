import { useState } from 'react';
import Header from "./Component/Header/Header.jsx"
import Formularios from "./Component/Formulario/Formularios.jsx"
import MiOrg from "./Component/MiOrg/MiOrg.jsx"
import Equipo from "./Component/Equipo/Equipo.jsx";
import './app.css'
import Footers from './Component/Footer/Footer.jsx';
import Calificacion from './Component/Calificacion/Calificacion.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Pediatra",
    foto: "https://media.licdn.com/dms/image/D4D03AQHdrDngGxQcxg/profile-displayphoto-shrink_200_200/0/1680814409956?e=1698883200&v=beta&t=rj-h4tL8OitHDRc5qnDJzt4qnfD_gQAP9Ozom0nzKBM",
    nombre: "Octavio Balverdi",
    descripcion: "exelente medico",
    calificacion: [Calificacion]
  }])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Lista de equipos
  const equipos = [
    {
      titulo: "Pediatra",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Odontopediatra",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Gastroenterólogo",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Neurólogo",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "Neumonologo",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Traumatólogo",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Neonatologo",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formularios
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
        )
      }
      <Footers />

    </div>
  );
}

export default App
