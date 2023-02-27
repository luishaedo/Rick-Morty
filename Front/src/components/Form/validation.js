export default function validateInputs(inputs){
    let errors = {};
    if(!inputs.username 
        ||  /^w+@[a-zA-Z_]+?.[a-zA-Z] {2,3}$/.test(inputs.username) 
        || inputs.username.length >= 35)
        errors.username = "Usuario Invalido";
    if(inputs.password 
        || /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(inputs.password))errors.password = "El Password debe tener mínimo 8 caracteres, al menos una letra y un número"    
    return errors;    
    }