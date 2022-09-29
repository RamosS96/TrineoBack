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


function FormResults() {
    const handleNewResults = () => {
        const resultDate = document.getElementById('Result-date')
        const resultresult = document.getElementById('Result-result')
        const resultexact = document.getElementById('Result-exact')
        const resultRival = document.getElementById('Result-RivalName')
        const docRef = collection(db, 'results')
        const payload = {
            date: parseInt(resultDate.value),
            result: resultresult.value,
            resulte: resultexact.value,
            rival: resultRival.value,

        }
        addDoc(docRef, payload)

    }
    return (
        <div>
            <form>
                <input type="number" id="Result-date" placeholder="Fecha, en timestamp" />
                <input type="number" id="Result-result" placeholder="Resultado (win, lose, draw)" />
                <input type="text" id="Result-exact" placeholder="Resultado exacto (x - x)" />
                <input type="text" id="Result-RivalName" placeholder="Rival" />
                <button onClick={(event) => {
                    event.preventDefault()
                    handleNewResults()
                }} id="result-submit">Enviar a BD</button>
            </form>
        </div>
    );
}

export default FormResults;