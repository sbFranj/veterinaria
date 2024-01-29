import { useParams } from 'react-router-dom';
import {createVeterinario,getVeterinario, updateVeterinario} from '../services/veterinariosService'
import {useState, useEffect } from "react";

export default function AddVeterinario(){
    const [veterinario, setVeterinario] = useState({
        name:"",
        age:0,
        telefono:0
    })
    // const [id, setId] = useState("65a582dbb84e05ec886b3ee1");
    //const [id, setId] = useState();
    const [edit, setEdit] = useState(false);
    const {id} = useParams()
    
    function handleChange(e){
        setVeterinario({
            ...veterinario,
            [e.target.name]:e.target.value
        })
    }
   function add(e) {
    e.preventDefault()

    console.log('add')
    createVeterinario(veterinario).then()
   }
   useEffect(() => {
       if(id){
        console.log(id)
        getVeterinario(id).then((response) => {setVeterinario(response.data)})
        setEdit(true)
        }
    },[])

    function update(e){
        e.preventDefault()
        console.log("veterinarop", veterinario)
        updateVeterinario(id, veterinario).then()
    }

    return (
    <>
    <div className="form-control formB">
        
    <form >
        {!edit && "Add Veterinario"}{edit && "Update Veterinario"}<br></br>
    Nombre: <input type="text" onChange={handleChange} value={veterinario.name} name="name" className='form-control'></input><br></br>
    Edad: <input type="text" onChange={handleChange} value={veterinario.age==0? "": veterinario.age} name="age" className='form-control' ></input><br></br>
    Telefono: <input type="text" onChange={handleChange} value={veterinario.telefono==0? "": veterinario.telefono} name="telefono" className='form-control'></input><br></br>
    {!edit && <button className="form-control vbutton" onClick={add}>Add</button>}
    {edit && <button className="form-control vbutton" onClick={update}>Update</button>}
    

    </form>
    </div>
    </>
    )
}