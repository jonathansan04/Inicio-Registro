import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import Validacion from './Validacion';
import axios from 'axios';
import Swal from 'sweetalert2';


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
   

    const sesion =(event) =>{
      //  event.preventDefault();
      //  setErrors(Validacion(values));
       // if(errors.email === "" && errors.password ===""){
            axios.post('http://localhost:8081/login', {
                email:email,
                password:password
            })
            .then((res) => {
             //   alert("Inicio de sesion exitoso");
               // navigate('/home')
               console.log(res)
                if(res.data === "Incorrecto"){
    
                    alert("Usuario no existente");
                }else{
                    alert("Inicio de sesion exitoso");
                    navigate('/home')
                }
            })
            .catch(err => console.log(err));  
        //  }
        
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action='' >
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input name='email' type='email' placeholder='email' onChange={(event)=>{
                         setEmail(event.target.value);
                         }} className='form-control rounded-0'></input>
                      
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input name='password' type='password' placeholder='password' onChange={(event)=>{
                         setPassword(event.target.value);
                         }} className='form-control rounded-0'></input>
                      

                    </div>
                    <button type='submit' onClick={sesion} className='btn btn-success w-100'>Inicio sesion</button>
                    <p>Holaaaa</p>
                    <Link to="/registrar"  className='btn btn-default border w-100 bg-light text-decoration-none '>Registrarse</Link>

                </form>
            </div>
        </div>
    )
}
export default Login;