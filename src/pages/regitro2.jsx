import { useState } from "react"
import "./formulario.css"
import { useNavigate } from "react-router-dom"
export function Formu(){
    const[nombre,setNombre]= useState("")
    const[contra,setContra]= useState("")
    const[error,setError]= useState(false)
    const [user, setUser] = useState([])
    const navegador=useNavigate()
    const dejarPasar=(user)=>{
        if(user=="rodrigo"){
          navegador("/home")}}

    const manejarEnviar=(evento)=>{
        evento.preventDefault()
        if(nombre==="" ||contra===""){
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
        dejarPasar(user)
        console.log(user)

    }

    return(
        <section className="sec">
        
        <form className="formulario"
        onSubmit={manejarEnviar}>
            <h2>Login C: </h2>
            <input type="text"
            value={nombre}
            onChange={evento =>setNombre(evento.target.value)} />
            <input type="password"
            value={contra}
            onChange={evento =>setContra(evento.target.value)} /> 
            <button type="submit">Iniciar Sesion</button>
            {error && <p>Todos los campos deben ser completados</p>}

        </form>
    </section>
    )
}