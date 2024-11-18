function toggleTheme(toggle) {
    toggle.classList.toggle('checked'); // Move the switch for the clicked toggle
    // Optionally, you can also toggle a "dark-mode" class or any other class for styling
    document.body.classList.toggle('dark-mode');
}


let alarms = [];
let alarmsCus = [];

let isEditing=false;
let isEditingCus=false;

// Function to add an alarm
function setAlarm() {
  const alarmInput = document.getElementById('alarm-time').value;
  if (alarmInput) {
    alarms.push(alarmInput); // Add the alarm time to the list

    // Display the alarm list
    updateAlarmList();

    // Clear the input field after adding
    // document.getElementById('alarm-time').value = '';
  } else {
    alert('Please choose a time for the alarm.');
  }
}

// Function to update the displayed list of alarms
function updateAlarmList() {
    const alarmListElement = document.getElementById('alarm-list');
    alarmListElement.innerHTML = ''; // Clear the existing list

    // Loop through alarms and display them
    alarms.forEach((alarm, index) => {
        const listItem = document.createElement('div');
        if (!isEditing){
            listItem.innerHTML = `
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
                    ${alarm}
                    </div>
                    <div style="font-size: 12px; color: #865B51;">
                        15 gram
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

    // const redBox = document.createElement('div');
    // if (isEditing) {
    //     redBox.textContent = 'Delete'
    //     redBox.classList.add('editable');
    //     redBox.onclick = function () {
    //         deleteData(index); // Delete the clicked item
    //     };
    // }
    // else {
    //     redBox.textContent = ''
    //     const toggleSwitch = document.createElement('div');
    //     toggleSwitch.classList.add('toggle-switch');
    //     toggleSwitch.onclick = function () {
    //         toggleTheme(this); // Call the toggleTheme function when clicked
    //     };

    //     // Append the toggle switch to the redBox
    //     redBox.appendChild(toggleSwitch);
    // }
    editAppear()
}


// Function to check the current time against all set alarms
function checkTime() {
  const currentTime = new Date();
  const currentTimeStr = currentTime.toTimeString().slice(0, 5); // Get current time in HH:MM format

  alarms.forEach((alarm) => {
    
  });
}



// Check the time every second
setInterval(checkTime, 1000);

// function handleEdit(){
//     const toggleButton = document.getElementById("toggle-switch");
// }

function editAppear(){
    const editButton = document.getElementById('edit-btn'); // Locate the Edit button
    if (alarms.length === 0) {
        editButton.style.display = 'none'; // Hide Edit button if no alarms
        return;
    } else {
        editButton.style.display = 'block'; // Show Edit button if there are alarms
    }
}

function deleteData(index) {
    alarms.splice(index, 1); // Remove the data at the given index
    updateAlarmList(); // Refresh the list
}


window.onload = function () {
    editAppear();
    editAppearCus();
};

function handleEdit() {
    //console.log("Hi")
    isEditing = !isEditing;
    console.log(isEditing) // Toggle the edit mode
    updateAlarmList(); // Update the list with red boxes if in edit mode
  };



// CustomizeFunction
// Function to add an alarm
function setAlarmCus() {
    const alarmInputCus = document.getElementById('alarm-time-cus').value;
    if (alarmInputCus) {
      alarmsCus.push(alarmInputCus); // Add the alarm time to the list
  
      // Display the alarm list
      updateAlarmListCus();
  
      // Clear the input field after adding
      document.getElementById('alarm-time-cus').value = '';
    } else {
      alert('Please choose a time for the alarm.');
    }
  }
  
  // Function to update the displayed list of alarms
  function updateAlarmListCus() {
      const alarmListElementCus = document.getElementById('alarm-list-cus');
      alarmListElementCus.innerHTML = ''; // Clear the existing list
  
      // Loop through alarms and display them
      alarmsCus.forEach((alarm, index) => {
          const listItemCus = document.createElement('div');
          if (!isEditingCus){
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
  
  
  // Function to check the current time against all set alarms
  function checkTimeCus() {
    const currentTime = new Date();
    const currentTimeStr = currentTime.toTimeString().slice(0, 5); // Get current time in HH:MM format
  
    alarmsCus.forEach((alarm) => {
      
    });
  }
 
  
  
  // Check the time every second
  setInterval(checkTime, 1000);
  
  
  function editAppearCus(){
      const editButtonCus = document.getElementById('edit-btn-cus'); // Locate the Edit button
      if (alarmsCus.length === 0) {
          editButtonCus.style.display = 'none'; // Hide Edit button if no alarms
          return;
      } else {
          editButtonCus.style.display = 'block'; // Show Edit button if there are alarms
      }
  }
  
  function deleteDataCus(index) {
      alarmsCus.splice(index, 1); // Remove the data at the given index
      updateAlarmListCus(); // Refresh the list
  }
  
  
  
  function handleEditCus() {
      isEditingCus = !isEditingCus;
      console.log(isEditingCus) // Toggle the edit mode
      updateAlarmListCus(); // Update the list with red boxes if in edit mode
    };

  
  