import React from 'react'
import { useState } from 'react';
import styles from '../styles/Signup.module.css'
import swal from 'sweetalert';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase'
import { async } from '@firebase/util';

export default function login() {
    // State
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    

    
    const auth = getAuth();
    const signupHandle = async (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            swal("SuccessFull!", 'error.message', "success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal("Warning!", error.message, "warning");
        });

        // console.log(email);
        // const auth = getAuth();
        // signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     const user = userCredential.user;
        //     console.log(user.name);
        //     swal("SuccessFull!", error.message, "success");
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     swal("Warning!", error.message, "warning");
        //     // ..
        // });
}
    // swal("Good job!", "Are you registered SuccessFully", "success");
    return (
        
        <div className="container" id={styles.container}>
          
            <div className="row">
            <div className="col s8 offset-s2">
                <div className="row">
                    <form className="col s12" onSubmit={signupHandle}>
                    <h3>Login Your Account</h3>  
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={((e)=>setemail(e.target.value))}/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate" onChange={((e)=>setpassword(e.target.value))}/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="text-center"> 
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}
