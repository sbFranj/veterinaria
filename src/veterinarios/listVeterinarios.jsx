import { useEffect, useState } from "react";
import {getVeterinarios, deleteVeterinario} from '../services/veterinariosService'
import { Link, useNavigate } from "react-router-dom";


export default function ListVeterinario() {
    const [veterinarios, setVeterinarios] = useState([])
    const [id, setId] = useState("");
    const navigate = useNavigate()
    function delVeterinario(e){
        deleteVeterinario(e.target.id).then((response)=>{
            setId(response.data._id)
        })
    }

    function goTo(e){
        navigate('/addVeterinario/'+e.target.id)
        let id = e.target._id
    }

    useEffect(() => {
        async function getVeterinariosCom(){
            const vete = await getVeterinarios();
            console.log("veterinarios:", vete.data)
            setVeterinarios(vete.data)
            
        }
        getVeterinariosCom()
    },[id])

    return (
    <>
    {veterinarios.map(vete => (
    <div key={vete._id} className="form-control vcard">
        <div  className="card" >
        <div className="card-header">Veterinario {vete.name}
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Edad: {vete.age} años</li>
        <li className="list-group-item">Telefono: {vete.telefono}</li>
        <li className="list-group-item">id: {vete._id}</li>
        
        <button onClick={delVeterinario} id={vete._id} className="vbuttonDel form-control">Delete</button>
        <button onClick={goTo} id={vete._id} className="vbutton form-control" >Edit</button>
        <Link to={`/addVeterinario/${vete._id}`}><button className="vbutton form-control">Edit2</button></Link>
        
        
        </ul>
        </div>
    </div>))
    } 
    </>
    
    )
        
    
}
