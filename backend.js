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
    const dbRef = push(ref(db, 'Alarm_Default'));

    set(dbRef, {
        Time: time.value,
        Gram: gram.value,
        status: false
    }).then(() => {
        console.log("Data Added");
    }).catch((error) => {
        alert("Boommmmm");
        console.log(error);
    });

    

    time.value = '';
    gram.value = '';
};

function addDataCus(){
  const time_cus = document.getElementById('alarm-time-cus');
  const gram_cus = document.getElementById('gram-cus');
  const date = document.getElementById('date');
  const dbRef_cus = push(ref(db, 'Alarm_Customize'));

  set(dbRef_cus, {
    Date: date.value,
    Time: time_cus.value,
    Gram: gram_cus.value,
    status: false
  }).then(() => {
      console.log("Data Added");
  }).catch((error) => {
      alert("Boommmmm");
      console.log(error);
  });

  time_cus.value = '';
  gram_cus.value = '';
  date.value=''


}

export async function getAllData() {
    const dbRef = ref(getDatabase());
    var data;
    await get(child(dbRef, `Alarm_Default`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        data = snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    if(data){
      return data
    }else {
      console.log("BOOOMMMM")
    }
}

export async function getAllDataCus() {
    const dbRef = ref(getDatabase());
    var data;
    await get(child(dbRef, `Alarm_Customize`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        data = snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    if(data){
      return data
    }else {
      console.log("BOOOMMMM")
    }
}
window.onload = getAllData;

const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click',addData);

const addBtnCus = document.getElementById('addBtnCus')
addBtnCus.addEventListener('click',addDataCus);

