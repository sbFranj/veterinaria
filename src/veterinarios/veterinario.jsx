import { useEffect, useState } from "react";
import {getVeterinario} from '../services/veterinariosService'



export default function Veterinario() {
    const [veterinario, setVeterinario] = useState({})
    const [id, setId] = useState("")

    function getInput(e){
        setId(e.target.value)
    }

    useEffect(() => {
        getVeterinario(id).then((response)=>{
            setVeterinario(response.data)
        })
    },[id])

    return (
    <>
    {
        <div key={veterinario._id} className="form-control vcard2">
        Find by Id<input type="text" onChange={getInput} className="vinput"></input>
        <div  className="card" >
        <div className="card-header">
            Veterinario {veterinario.name}
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Edad: {veterinario.age} años</li>
        <li className="list-group-item">Telefono: {veterinario.telefono}</li>
        <li className="list-group-item">id: {veterinario._id}</li>
        </ul>
        </div>
    </div>
    } 
    </>
    
    )
        
    
}