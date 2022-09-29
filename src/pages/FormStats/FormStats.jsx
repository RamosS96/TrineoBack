import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4j7iBZ84btYBcd8ANWP0VLEHJUas2PJ4",
  authDomain: "trineo-app.firebaseapp.com",
  projectId: "trineo-app",
  storageBucket: "trineo-app.appspot.com",
  messagingSenderId: "495252829451",
  appId: "1:495252829451:web:8045ab795194e571e7de0e",
  measurementId: "G-3289JK9TW1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function FormStats() {


  const handleNewSatat = () => {
    const statsimg = document.getElementById('Stats-img')
    const statsGF = document.getElementById('Stats-GF')
    const statsFOULS = document.getElementById('Stats-FOULS')
    const statsFOULSRIV = document.getElementById('Stats-FOULSRIV')
    const statsGC = document.getElementById('Stats-GC')
    const statsREM = document.getElementById('Stats-REM')
    const statsREMRIV = document.getElementById('Stats-REMRIV')
    const statsdate = document.getElementById('Stats-date')
    const statsTA = document.getElementById('Stats-TA')
    const statsTAR = document.getElementById('Stats-TAR')
    const statsTR = document.getElementById('Stats-TR')
    const statsTRR = document.getElementById('Stats-TRR')
    const statsPOS = document.getElementById('Stats-POS')
    const statsGOALS = document.getElementById('Stats-GOALS')
    const statsrival = document.getElementById('Stats-rival')
    const statsfecha = document.getElementById('Stats-Fecha')
    const docRef = collection(db, 'matches')
    const payload = {
      FOULS: parseInt(statsFOULS.value),
      FOULSRIV: parseInt(statsFOULSRIV.value),
      GC: parseInt(statsGC.value),
      GF: parseInt(statsGF.value),
      GOALS: statsGOALS.value,
      POS: parseInt(statsPOS.value),
      REM: parseInt(statsREM.value),
      REMRIV: parseInt(statsREMRIV.value),
      TA: parseInt(statsTA.value),
      TAR: parseInt(statsTAR.value),
      TR: parseInt(statsTR.value),
      TRR: parseInt(statsTRR.value),
      date: parseInt(statsdate.value),
      img: statsimg.value,
      rival: statsrival.value,
      fecha: parseInt(statsfecha.value)
    };
    addDoc(docRef, payload);

  }



  return (
    <div>
      <form id="Statsform">
        <input type="number" id="Stats-Fecha" placeholder="Fecha Torneo" />
        <input type="search" id="Stats-rival" placeholder="Rival" />
        <input type="search" id="Stats-img" placeholder="Link de la Imagen del partido" />
        <input type="number" id="Stats-GF" placeholder="Goles a favor" />
        <input type="number" id="Stats-GC" placeholder="Goles en contra" />
        <input type="number" id="Stats-FOULS" placeholder="Fouls Trineo" />
        <input type="number" id="Stats-FOULSRIV" placeholder="Fouls Rival" />
        <input type="number" id="Stats-REM" placeholder="Remates Trineo" />
        <input type="number" id="Stats-REMRIV" placeholder="Remates Rival" />
        <input type="number" id="Stats-date" placeholder="Fecha (en timestamp)" />
        <input type="number" id="Stats-TA" placeholder="Amarillas Trineo" />
        <input type="number" id="Stats-TAR" placeholder="Amarillas Rival" />
        <input type="number" id="Stats-TR" placeholder="Rojas Trineo" />
        <input type="number" id="Stats-TRR" placeholder="Rojas Rival" />
        <input type="number" id="Stats-POS" placeholder="Posesion Trineo" />
        <textarea id="Stats-GOALS" placeholder="Incidencias (usar formato 8' Apellido, 10' Apellido)"></textarea>
        <button onClick={(event) => {
          event.preventDefault()
          handleNewSatat()
        }} id="stats-submit">Enviar a BD</button>
      </form>
    </div>
  );
}

export default FormStats;