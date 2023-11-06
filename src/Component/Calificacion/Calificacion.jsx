import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./Calificacion.css"

const Calificacion = (props) => {
    const [rating , setRating] = useState (null)
    const [hover , setHover] = useState (null)
return(
 <div >
    Calificacion:   
    {[... Array (5)].map ((star, i) => {
        const ratingValue = i + 1 ;

        return (
            <label>
        <input type="radio" name="rating" className="input" 
        value={ratingValue} 
        onClick={() => setRating(ratingValue)}
        key={Calificacion.ratingValue}/>
        
        <FaStar className='star' 
        color={ratingValue <= ( hover || rating) ? "#ffc107" : "#e4e5e9"}
         Size={4}
         onMouseEnter={() => setHover(ratingValue)}
         onMouseLeave={() => setHover(null)} 
         />
        </label>
        )
    })}
 </div>
)
}

export default Calificacion