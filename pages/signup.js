import React from 'react'
import { useState } from 'react';
import styles from '../styles/Signup.module.css'
import swal from 'sweetalert';
import { getAuth,updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase'
import { async } from '@firebase/util';

export default function signup() {
    // State
    const [first, setfirst] = useState('');
    const [last, setlastname] = useState('');
    const [phone, setphone] = useState('');
    const [addess, setaddess] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    

    
    const signupHandle = async (e) => {
        e.preventDefault()
        // console.log(email);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(phone);
            updateProfile(auth.currentUser, {
                displayName: first+' '+last, 
                photoURL: "https://example.com/jane-q-user/profile.jpg",
              }).then(() => {
                console.log(user);
                swal("Good job!", "Are you registered SuccessFully "+user.displayName, "success");
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal("Warning!", error.message, "warning");
            // ..
        });
}
    // swal("Good job!", "Are you registered SuccessFully", "success");
    return (
        
        <div className="container" id={styles.container}>
          
            <div className="row">
            <div className="col s8 offset-s2">
                <div className="row">
                    <form className="col s12" onSubmit={signupHandle}>
                    <h3>Register Your Account</h3>  
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" onChange={((e)=>setfirst(e.target.value))}/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" onChange={((e)=>setlastname(e.target.value))}/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="phone" type="text" className="validate" onChange={((e)=>setphone(e.target.value))}/>
                        <label htmlFor="phone">phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="addess" type="text" className="validate" onChange={((e)=>setaddess(e.target.value))}/>
                        <label htmlFor="addess">addess</label>
                        </div>
                    </div>
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
