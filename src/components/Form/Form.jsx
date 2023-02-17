import styles from './Form.module.css'
import React from 'react'
import { useState } from 'react';
import validateInputs from './validation'

export default function Form(props){

    const [userData, setUserData] = useState({ 
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',        
    });

    const handleInputChange = (e) =>{
        setUserData({ ...userData, [e.target.name] : e.target.value});
        setErrors(validateInputs(userData));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData);
    }

    return(
        <div className={styles.divContainerForm}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor=""> USERNAME: </label>
                <input className={styles.input} type="text" name="username" value={userData.username} onChange={handleInputChange} />
                <p>{errors.name}</p>
                <label className={styles.label} htmlFor=""> PASSWORD </label>
                <input className={styles.input} type="password" name="password" value={userData.password} onChange={handleInputChange} /> 
                <p>{errors.password}</p>
                <button className={styles.buttonForm}> Login </button>   



            </form>
        </div>
    )
}