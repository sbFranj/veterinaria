import {createUser} from '../services/userService'
import {useState } from "react";

export default function AddUser(){
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState({
        email:"",
        login:"",
        name:"",
        role:"user",
        password:""
    })

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    function add(e){
        e.preventDefault()

        console.log(user)
        createUser(user).then()
    }

    return (
        <>
        <div className="form-control register">
            
        <form >
            {!edit && "Registro"}{edit && "Update User"}<br></br>
        Email: <input type="text" onChange={handleChange} value={user.email} name="email" className='form-control'></input><br></br>
        Login: <input type="text" onChange={handleChange} value={user.login} name="login" className='form-control' ></input><br></br>
        Nombre: <input type="text" onChange={handleChange} value={user.name} name="name" className='form-control' ></input><br></br>
        Contraseña: <input type="text" onChange={handleChange} value={user.password} name="password" className='form-control' ></input><br></br>

        {!edit && <button className="form-control registerB" onClick={add}>Add</button>}
        {edit && <button className="form-control registerB" onClick={update}>Update</button>}
        
    
        </form>
        </div>
        </>
        )
}