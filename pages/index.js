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
        <div className="banner">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div> 
        {users ? <h1>Are you Login {users}</h1> : ''}
     </div>
  )
}
