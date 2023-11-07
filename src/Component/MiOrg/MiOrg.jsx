import { useState } from "react"
import "./MiOrg.css"
import { useNavigate } from "react-router-dom"
import { GrPowerShutdown } from "react-icons/gr";

const MiOrg = (props) => {
    const [mostrar, actualizarMostrar] = useState(true)
    const navegador=useNavigate()
    const manejarClick = () =>{
        actualizarMostrar(!mostrar)
    }
    return (
    <section className="orgSection">
        <h2 className="title">Recomendar Profesional</h2>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        <button className="Logout" onClick={()=>{navegador("/")}}><GrPowerShutdown /></button>
    </section>
    );
}

export default MiOrg