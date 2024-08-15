import {React, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
//import Validacionreg from './Validacionreg';
import Axios from 'axios';
import Swal from 'sweetalert2';

function Registrar(){


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 
    const navigate = useNavigate();


   

    const registros =() =>{
   //     setErrors(Validacionreg(values));
      //  if(errors.name ==="" && errors.email === "" && errors.password ===""){
            Axios.post('http://localhost:8081/registro', {
                name:name,
                email:email,
                password:password
            }).then(() => {
                Swal.fire({
                    title: '<strong>Registro exitoso</strong>',
                    html: '<i>La persona <strong>'+  name +' </strong> se ha registrado exitosamente</i>',
                    icon: ' success'
                  })
               // navigate('/')
            })
            //.catch(err => console.log("Estes el error" + err));  
        //  }
    }

    return(


        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action='' >
                    <h2>Registro</h2>
                    <div className='mb-3'>
                        <label htmlFor='name'>Nombre</label>
                        <input onChange={(event)=>{
                         setName(event.target.value);
                         }}  type='text' placeholder='Nombre' className='form-control rounded-0' value={name}></input>

                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input 
                        onChange={(event)=>{
                            setEmail(event.target.value);
                          }}  type='email' placeholder='Email' className='form-control rounded-0' value={email}></input>
                    

                    </div>
                 
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={(event)=>{
                         setPassword(event.target.value);
                         }}  type='password' placeholder='password' className='form-control rounded-0' value={password}></input>

                    </div>
                    <button onClick={registros} className='btn btn-success w-100'>Registrarse</button>
                    <p>Buenaaasss</p>
                    <Link to="/"  className='btn btn-default border w-100 bg-light text-decoration-none '>Iniciar sesion </Link>

                </form>
            </div>
        </div>
    )
}
export default Registrar;