import { useState } from "react"
import "./Formulario.css"
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'


const Formularios = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            foto,
            equipo,
            descripcion
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena para recomendar Profesionales.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <CampoTexto
                titulo="Descripcion"
                placeholder="Ingresar descripcion breve"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            /><br />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear Especialidad.</h2>
            <CampoTexto
                titulo="Especialidad"
                placeholder="Ingresar Especialidad"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar Especialidad</Boton>
        </form>
    </section>
}

export default Formularios