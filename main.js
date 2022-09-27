import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection,addDoc,doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

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

const statsform = document.getElementById('Statsform')
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
const statssubmit = document.getElementById('stats-submit')
const statsrival = document.getElementById('Stats-rival')

const handleNewSatat = () => {
    const docRef = collection(db, 'matches')
    const payload = {
      FOULS: statsFOULS.value,
      FOULSRIV: statsFOULSRIV.value,
      GC: statsGC.value,
      GF: statsGF.value,
      GOALS: statsGOALS.value,
      POS: statsPOS.value,
      REM: statsREM.value,
      REMRIV: statsREMRIV.value,
      TA: statsTA.value,
      TAR: statsTAR.value,
      TR: statsTR.value,
      TRR: statsTRR.value,
      date: statsdate.value,
      img: statsimg.value,
      rival: statsrival.value
    };
    addDoc(docRef, payload)
  }

statssubmit.addEventListener("click", (e) => {
      
    e.preventDefault()
    handleNewSatat()

  
  })