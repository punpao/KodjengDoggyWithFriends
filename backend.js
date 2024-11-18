// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8CHNN1ipl17EQAPyoTb0WVMAWe2PRrAg",
  authDomain: "kodjengdoggy.firebaseapp.com",
  databaseURL: "https://kodjengdoggy-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "kodjengdoggy",
  storageBucket: "kodjengdoggy.firebasestorage.app",
  messagingSenderId: "817037899250",
  appId: "1:817037899250:web:53aa8546f2f33237e6276b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

function addData(){
    const time = document.getElementById('alarm-time')
    const gram = document.getElementById('gram')
    console.log(time.value)
    set(ref(db, 'Alarm'), {
        Date : null,
        Time: time.value,
        Gram: gram.value,
        isDefault: true

    }).then(() => {
        alert("Data Added");
    }).catch((error) =>{
        alert("Boommmmm");
        console.log(error)
    })
    document.getElementById('alarm-time').value = '';
    document.getElementById('gram').value = '';

};

const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click',addData);

