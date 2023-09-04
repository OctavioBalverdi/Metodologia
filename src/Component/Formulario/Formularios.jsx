import { useState } from "react"
import "./Formulario.css"
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'
import Calificacion from '../Calificacion/Calificacion'

const Formularios = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [calificacion, actualizarCalificacion] = useState("")

    const { registrarColaborador } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            foto,
            equipo,
            descripcion,
            calificacion
        }
        registrarColaborador(datosAEnviar)
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
            <Calificacion
            valor={calificacion}
            actualizarEquipo={actualizarCalificacion}
            />
            <Boton>Recomendar</Boton>
        </form>
    </section>
}

export default Formularios