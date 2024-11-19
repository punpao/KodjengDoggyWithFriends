import {getAllData, getAllDataCus} from './backend.js'
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


const alarms =  await getAllAlarms()

const alarmsCus = await getAllAlarmsCus();

let isEditing=false;
let isEditingCus=false;

// window.to add an alarm
window.setAlarm =()=> {
  const alarmInput = document.getElementById('alarm-time').value;
  if (alarmInput) {
    // alarms.push(alarmInput); // Add the alarm time to the list

    // Display the alarm list
    updateAlarmList();

    // Clear the input field after adding
    // document.getElementById('alarm-time').value = '';
  } else {
    alert('Please choose a time for the alarm.');
  }
}

// window.to update the displayed list of alarms
window.updateAlarmList = () => {
    const alarmListElement = document.getElementById('alarm-list');
    alarmListElement.innerHTML = ''; // Clear the existing list
    console.log("Hi")
    console.log(alarms)
    // Loop through alarms and display them
    Object.entries(alarms).forEach(([id, alarm]) => {
        console.log("Hi")
        const listItem = document.createElement('div');
        console.log(alarm)
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
                <div class="toggle-switch" id="toggle-switch" onclick="toggleTheme(this)"></div>
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
                <div style="background-color:red; color:white; width: 70px; display:flex; justify-content:center; align-items: center; font-size:14px" onClick="deleteData(${index})">
                  Delete
                </div>
            </div>
            <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
        `;
        alarmListElement.appendChild(listItem);
        }
    });

    editAppear()
}


// window.to check the current time against all set alarms



// Check the time every second


// window.handleEdit(){
//     const toggleButton = document.getElementById("toggle-switch");
// }

window.editAppear = () =>{
    const editButton = document.getElementById('edit-btn-cus'); // Locate the Edit button
    if (Object.entries(alarms).length === 0) {
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
};

window.handleEdit = ()=> {
    //console.log("Hi")
    isEditing = !isEditing;
    console.log(isEditing) // Toggle the edit mode
    updateAlarmList(); // Update the list with red boxes if in edit mode
  };



// CustomizeFunction
// window.to add an alarm
window.setAlarmCus =()=> {
    const alarmInputCus = document.getElementById('alarm-time-cus').value;
    if (alarmInputCus) {
      alarmsCus.push(alarmInputCus); // Add the alarm time to the list
  
      // Display the alarm list
      updateAlarmListCus();
  
      // Clear the input field after adding
    //   document.getElementById('alarm-time-cus').value = '';
    } else {
      alert('Please choose a time for the alarm.');
    }
  }
  
  // window.to update the displayed list of alarms
  window.updateAlarmListCus = () =>{
      const alarmListElementCus = document.getElementById('alarm-list-cus');
      alarmListElementCus.innerHTML = ''; // Clear the existing list
  
      // Loop through alarms and display them
      Object.entries(alarmsCus).forEach(([id,alarm]) => {
        console.log(id)
          const listItemCus = document.createElement('div');
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
                  <div class="toggle-switch" id="toggle-switch" onclick="toggleTheme(this)"></div>
              </div>
              <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
          `;
          alarmListElementCus.appendChild(listItemCus);
          }else{
              listItemCus.innerHTML = `
              <div style="display: flex; justify-content: space-between; width: 100%;">
                  <div style="display: flex; flex-direction: column;">
                      <div style="font-size: 30px;">
                      ${alarm}
                      </div>
                      <div style="font-size: 12px; color: #865B51;">
                          15 gram
                      </div>
                      <div style="font-size: 12px;">
                          alarm
                      </div>
                  </div>
                  <div style="background-color:red; color:white; width: 70px; display:flex; justify-content:center; align-items: center; font-size:14px" onClick="deleteDataCus(${index})">
                    Delete
                  </div>
              </div>
              <div style="width: 100%; background-color: #E5E5E6; margin-top: 10px; margin-bottom:10px; border: 0px solid #E5E5E5; height: 0.25px"></div>
          `;
          alarmListElementCus.appendChild(listItemCus);
          }
      });
  
      
      editAppearCus()
  }
  
  
  // window.to check the current time against all set alarms

 
  
  
  // Check the time every second

  
  
  window.editAppearCus =()=>{
      const editButtonCus = document.getElementById('edit-btn-cus'); // Locate the Edit button
      if (Object.entries(alarmsCus).length === 0) {
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
    }

    initializeApp();
