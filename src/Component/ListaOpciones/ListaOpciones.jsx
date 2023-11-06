import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })
    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return (
    <div className="lista-opciones">
        <label>Medicos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Medicos</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
    )
}

export default ListaOpciones