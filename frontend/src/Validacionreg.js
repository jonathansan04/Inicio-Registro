function Validacionreg(values){
    

    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name= "Nombre no encontrado"
    }
    else{
        error.name =""
    }

   
    if(values.email === ""){
        error.email= "Email no encontrado"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email no valido"
    }else{
        error.email =""
    }

    

    if(values.password ===""){
        error.password = "Contraseña no encontrada"
    
    }else if(!password_pattern.test(values.password)){
        error.password = "Contraseña no valida"
    }else {
        error.password =""
    }
    alert(error)
        return error;
}

export default Validacionreg;