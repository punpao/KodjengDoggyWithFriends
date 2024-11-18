// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
    get,
    child,
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

function addData() {
    const time = document.getElementById('alarm-time');
    const gram = document.getElementById('gram');

    // Reference to 'Alarm' with push to generate a unique key
    const dbRef = push(ref(db, 'Alarm'));

    set(dbRef, {
        Date: null,
        Time: time.value,
        Gram: gram.value,
        isDefault: true
    }).then(() => {
        console.log("Data Added");
    }).catch((error) => {
        alert("Boommmmm");
        console.log(error);
    });

    time.value = '';
    gram.value = '';
};

function getAllData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Alarm`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
window.onload = getAllData;

const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click',addData);

