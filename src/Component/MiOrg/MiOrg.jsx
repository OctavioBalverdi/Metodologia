import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () =>{
        actualizarMostrar(!mostrar)
    }
    return (
    <section className="orgSection">
        <h2 className="title">Recomendar Profesional</h2>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
    );
}

export default MiOrg