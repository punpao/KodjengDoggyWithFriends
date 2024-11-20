import {getAllData, getAllDataCus , editAlarm , deleteAlarm , editAlarmCus , deleteAlarmCus , getAllNoti , checkFoodTank}  from './backend.js'
window.editAlarm = editAlarm;
window.deleteAlarm = deleteAlarm;
window.editAlarmCus = editAlarmCus ;
window.deleteAlarmCus = deleteAlarmCus
window.toggleTheme =(toggle) => {
    toggle.classList.toggle('checked'); // Move the switch for the clicked toggle
    // Optionally, you can also toggle a "dark-mode" class or any other class for styling
    document.body.classList.toggle('dark-mode');
}




const getAllAlarms = async () => {
    const data = await getAllData();
 // Wait for the data to be fetched
    return data; // Return the fetched data
};

const getAllAlarmsCus = async () => {
    const data = await getAllDataCus();
 // Wait for the data to be fetched
    return data; // Return the fetched data
};
const getAllNotii = async () => {
    const data = await getAllNoti();
 // Wait for the data to be fetched
    return data; // Return the fetched data
};
const isFoodEmpty = async () => {
    const fill = await checkFoodTank()
    return fill
}


const alarms =  await getAllAlarms()

const alarmsCus = await getAllAlarmsCus();

const notis = await getAllNotii()

let isEditing=false;
let isEditingCus=false;

// window.to add an alarm
window.setAlarm =()=> {
  const alarmInput = document.getElementById('alarm-time').value;
  const gramInput = document.getElementById('gram').value;
  if (alarmInput && gramInput && gramInput>0) {
    // alarms.push(alarmInput); // Add the alarm time to the list

    // Display the alarm list
    updateAlarmList();

    // Clear the input field after adding
    // document.getElementById('alarm-time').value = '';
  } else {
    alert('Please complete all the field and food amount must greater than 0');
  }
}

// window.to update the displayed list of alarms
window.updateAlarmList = () => {
    const alarmListElement = document.getElementById('alarm-list');
    alarmListElement.innerHTML = ''; // Clear the existing list
   
    // console.log(alarms)
    // Loop through alarms and display them
    if (alarms) {
    Object.entries(alarms).forEach(([id, alarm]) => {
        
        const listItem = document.createElement('div');
        const checked_class = alarm.status ? "checked" : ""
        // console.log(alarm.status)
        if (!isEditing){
            listItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; width: 100%;">
                <div style="display: flex; flex-direction: column;">
                    <div style="font-size: 30px;">
                    ${alarm.Time}
                    </div>
                    <div style="font-size: 12px; color: #865B51;">
                        ${alarm.Gram} gram
                    </div>
                    <div style="font-size: 12px;">
                        alarm
                    </div>
                </div>
                <div class="toggle-switch ${checked_class}" id="toggle-switch" onclick="toggleTheme(this); editAlarm('${id}');"></div>
            </div>
            <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
        `;
        alarmListElement.appendChild(listItem);
        }else{
            listItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; width: 100%;">
                <div style="display: flex; flex-direction: column;">
                    <div style="font-size: 30px;">
                    ${alarm.Time}
                    </div>
                    <div style="font-size: 12px; color: #865B51;">
                        ${alarm.Gram} gram
                    </div>
                    <div style="font-size: 12px;">
                        alarm
                    </div>
                </div>
                <div style="background-color:red; color:white; width: 70px; display:flex; justify-content:center; align-items: center; font-size:14px" onClick="deleteAlarm('${id}')">
                  Delete
                </div>
            </div>
            <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
        `;
        alarmListElement.appendChild(listItem);
        }
    });

}
//console.log('hi1')
editAppear()

}


// window.to check the current time against all set alarms



// Check the time every second


// window.handleEdit(){
//     const toggleButton = document.getElementById("toggle-switch");
// }

window.editAppear = () =>{
    const editButton = document.getElementById('edit-btn');// Locate the Edit button
    // Locate the Edit button
    if (typeof alarms === "undefined") {
        //console.log("hide")
        editButton.style.display = 'none'; // Hide Edit button if no alarms
        return;
    } else {
        editButton.style.display = 'block'; // Show Edit button if there are alarms
    }
}

window.deleteData =(index)=> {
    alarms.splice(index, 1); // Remove the data at the given index
    updateAlarmList(); // Refresh the list
}


window.onload = () => {
    editAppear();
    editAppearCus();
    updateAlarmList();
    updateAlarmListCus();
    getNotis() ;
    FoodTank() ;

};

window.handleEdit = ()=> {
    //console.log("Hi")
    isEditing = !isEditing;
    console.log(isEditing) // Toggle the edit mode
    updateAlarmList(); // Update the list with red boxes if in edit mode
  };
  
// export function isFutureDate(inputDateString) {
//     if (!inputDateString) {
//         console.error('Invalid date string');
//         return false;
//     }

//     const inputDate = new Date(inputDateString); // Convert the string to a Date object
//     const now = new Date(); // Get the current date
    
//     // Set time of both dates to midnight for date-only comparison
//     inputDate.setHours(0, 0, 0, 0);
//     now.setHours(0, 0, 0, 0);

//     // Return true if the input date is today or in the future
//     return inputDate >= now;
// }




// CustomizeFunction
// window.to add an alarm
window.setAlarmCus =()=> {
    const alarmInputCus = document.getElementById('alarm-time-cus').value;
    const gramInput = document.getElementById('gram-cus').value
    const dateInput = document.getElementById('date').value; // Get the date input value

    const now = new Date(); // Get the current date
    
    // Convert the date input string to a Date object
    const date = new Date(dateInput);

    // Set time of both dates to midnight for date-only comparison
    date.setHours(0,0,0,0)
    now.setHours(0, 0, 0, 0);

    // Return true if the input date is today or in the future
    if (alarmInputCus && gramInput  && gramInput>0 && date && date>=now) {
      //alarmsCus.push(alarmInputCus); // Add the alarm time to the list
  
      // Display the alarm list
      updateAlarmListCus();
  
      // Clear the input field after adding
    //   document.getElementById('alarm-time-cus').value = '';
    } else {
        console.log(Date.now())
      alert('Please complete all the field, food amount must greater than 0 and you cannot choose past date');
    }
  }
  
  // window.to update the displayed list of alarms
  window.updateAlarmListCus = () =>{
      const alarmListElementCus = document.getElementById('alarm-list-cus');
      alarmListElementCus.innerHTML = ''; // Clear the existing list
  
      // Loop through alarms and display them
      if ( alarmsCus){
      Object.entries(alarmsCus).forEach(([id,alarm]) => {
        // console.log(id)
          const listItemCus = document.createElement('div');
          const checked_class = alarm.status ? "checked" : ""
          if (!isEditingCus){
              listItemCus.innerHTML = `
              <div style="display: flex; justify-content: space-between; width: 100%;">
                  <div style="display: flex; flex-direction: column;">
                      <div style="font-size: 30px;">
                      ${alarm.Time}
                      </div>
                      <div style="font-size: 12px; color: #865B51;">
                          ${alarm.Gram} gram
                      </div>
                      <div style="font-size: 12px;">
                          Date: ${alarm.Date}
                      </div>
                  </div>
                  <div class="toggle-switch ${checked_class}" id="toggle-switch" onclick="toggleTheme(this); editAlarmCus('${id}');"></div>
              </div>
              <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
          `;
          alarmListElementCus.appendChild(listItemCus);
          }else{
              listItemCus.innerHTML = `
              <div style="display: flex; justify-content: space-between; width: 100%;">
                  <div style="display: flex; flex-direction: column;">
                      <div style="font-size: 30px;">
                      ${alarm.Time}
                      </div>
                      <div style="font-size: 12px; color: #865B51;">
                      ${alarm.Gram} gram
                      </div>
                      <div style="font-size: 12px;">
                      Date: ${alarm.Date}
                      </div>
                  </div>
                  <div style="background-color:red; color:white; width: 70px; display:flex; justify-content:center; align-items: center; font-size:14px" onClick="deleteAlarmCus('${id}')">
                    Delete
                  </div>
              </div>
              <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
          `;
          alarmListElementCus.appendChild(listItemCus);
          }
      });
  
      
      
  }
  editAppearCus()
}
  

  window.getNotis = () =>{
      const notisList = document.getElementById('notis');
    //   console.log("kuay")
    //   console.log(notis)
      notisList.innerHTML = ''; // Clear the existing list
  
      // Loop through alarms and display them
      if ( notis ){
      Object.entries(notis).forEach(([id,noti]) => {
          const listItemNoti = document.createElement('div');
        //   console.log(noti)
              listItemNoti.innerHTML = `
              <div style="height: 100px; margin-top: 10px;" class="card">
                <div class="icon">
                    <div style="display: flex; justify-content: space-between;">
                        <div style="display: flex; flex-direction: row; ">
                        <img src="./img/dog-icon.svg" alt="Dog Icon">
                        <div style='width:10px' '></div>
                        <div style="display: flex; align-items: center; width='10%' padding-left: 3%; font-size: 18px;">${noti.Date}</div>
                        </div>
                        <div style="display: flex; align-items: center; margin-left: 30%; font-size: 22px;">${noti.Time}</div>
                    </div>
                    
                    <div style="margin-top: 25px; color: #488E5D;"class="action">Dispensed ${noti.Gram} grams</div>
                </div>
                <div style="display: flex;  width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
            </div>
          `
          notisList.appendChild(listItemNoti);
      });
  
  }}

  window.FoodTank = async() => {
    const warn = document.getElementById('warning')
    warn.innerHTML = ``
    const fill = await isFoodEmpty() 
    console.log(fill[0].isEmpty)
    const tank = document.createElement('div')
    if (fill[0].isEmpty) {
            tank.innerHTML = `
                            <div style="display: flex; flex-direction: row; align-items: center; width: 100%; gap: 10px">
                                <img src="./img/warning.svg" style="height: 45px; width: auto; margin:0"/>
                                <div style="position: flex; flex-direction: column;">
                                    <div class="food_low">
                                        The Food tank is low
                                    </div>
                                    <div style="font-size: 12px; font-weight: light;">
                                        Please fill the tank
                                    </div>

                                </div>
                            </div>
                        `
    } else {
        tank.innerHTML = `<div style="display: flex; flex-direction: row; align-items: center; width: 100%; gap: 10px">
        <img src="img/fulltank_round.svg" style="height: 45px; width: auto; margin:0"/>
        <div style="position: flex; flex-direction: column;">
            <div class="food_low" style='color:#A6A579'>
                Doggie is Full
            </div>
        </div>
    </div>`
    }
    warn.appendChild(tank)
    
  }
  
  
  // window.to check the current time against all set alarms

 
  
  
  // Check the time every second

  
  
  window.editAppearCus =()=>{
      const editButtonCus = document.getElementById('edit-btn-cus');
      if (typeof alarmsCus === "undefined") {
          editButtonCus.style.display = 'none'; // Hide Edit button if no alarms
          return;
      } else {
          editButtonCus.style.display = 'block'; // Show Edit button if there are alarms
      }
  }
  
  window.deleteDataCus = (index)=> {
      alarmsCus.splice(index, 1); // Remove the data at the given index
      updateAlarmListCus(); // Refresh the list
  }
  
  
  
  window.handleEditCus = () => {
      isEditingCus = !isEditingCus;
      console.log(isEditingCus) // Toggle the edit mode
      updateAlarmListCus(); // Update the list with red boxes if in edit mode
    };

  
    const initializeApp = async () => {
    updateAlarmList();
    updateAlarmListCus();
    getNotis()
    FoodTank() ;
    }

    initializeApp();
