import Head from 'next/head'
import Image from 'next/image'
import {app} from '../firebase'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const auth = getAuth();
  const [users, setusers] = useState('')
   
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log(auth);
        if (user) {
          console.log(user.photoURL)
            setusers(user.displayName);
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });}, [])
  return (
    <div className={styles.container}>
        {users ? <h1>Are you Login {users}</h1> : ''}
     </div>
  )
}
