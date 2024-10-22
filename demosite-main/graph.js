document.addEventListener("DOMContentLoaded", function () {
  chooseaside(0);

  // Get the canvas context

  
});
var myChart;
var chartInitialized = false;

function intialchart() {
  var ctx = document.getElementById("heartrate").getContext("2d");

  // Create the line or bar chart using Chart.js
  var myChart = new Chart(ctx, {
    type: "line", // 'bar' for bar graph, 'line' for line graph
    data: {
      labels: [], // Initially empty labels (x-axis)
      datasets: [
        {
          label: "Live Data",
          data: [], // Initially empty data (y-axis)
          borderColor: "#083f64", // Line color
          backgroundColor: "#083f64", // Fill color (for line)
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: "Heart Rate",
          },
          beginAtZero: true,
        },
      },
    },
  });

  // Function to simulate receiving new data (this can be replaced by your real-time data source)
  function fetchNewValue() {
    return Math.floor(Math.random() * 100); // Random value between 0 and 100
  }

  // Function to update the graph with a new value
  function updateGraph() {
    var newValue = fetchNewValue(); // Fetch new data value
    var currentTime = new Date().toLocaleTimeString(); // Get current time for x-axis

    // Push new data into the chart's data array
    myChart.data.labels.push(currentTime); // Add new time label
    myChart.data.datasets[0].data.push(newValue); // Add new data point
    
    // Remove old data to keep the graph clean (optional)
    if (myChart.data.labels.length > 10) {
      // Keep only last 10 data points
      myChart.data.labels.shift();
      myChart.data.datasets[0].data.shift();
    }

    // Update the chart to reflect the new data
    myChart.update();
  }

  // Fetch and update the graph every 2 seconds (or any interval you prefer)
  setInterval(updateGraph, 2000);
}

var defaultmain = `
<div class="heading">
        <div style="display:flex;justify-content:space-between;"><h1 id="hi">Patient OverView</h1>
        <i onclick="hampress()" class="fa-solid fa-burger hambur" id="hambur"></i>
        </div>
        <div class="photo">
          <div class="name">
            <h3 class="main-name">Caroline Watson</h6>
            <h6 class="work">Assistant Doctor</h6>
          </div>
          <div class="mypic"></div>
        </div>
      </div>

      <div class="graph-grid">

        <div class="graph-container">
          <div class="overlay">Heart Rate</div>
          <canvas id="heartrate"></canvas>
        </div>

        <div class="graph-container">
          <div class="patientcard">
          <div class="heart">
        <h1>87 <span>bbp</span></h1> 
    <p>Heart Rate</p>
    </div>
    <div class="cold">
        <table border="0">
        <tr>
            <td><h6>Gender</h6><p>Male</p></td>
            <td><h6>Weight</h6><p>69</p></td>
        </tr>
        <tr>
            <td><h6>Last Appointment</h6><p>16 Aug 2024</p></td>
            <td><h6>Happyness</h6><p>Average</p></td>
        </tr>
        <tr>
            <td><h6>Last Visted</h6><p>15 Oct 12:00</p></td>
            <td><h6>Alerts</h6><p>7</p></td>
        </tr>
    </table>

        
        
    </div>

    

        
          
    </div>
          <div class="patient-info">
        
        
    </div>
        </div>
        <div class="graph-container">
          <div class="overlay"> Report</div>.

          <canvas id="painReport"></canvas>
        </div>
        <div class="graph-container">
          <div class="overlay"></div>
          <div class="second">
    <h4 id="text"></h4>
    <div class="cards">
        <div class="cardi red">
            <p class="tip">Last Visited</p>
            <p class="second-text">Aug 18 2024,5:00pm</p>
        </div>
        <div class="cardi blue">
            <p class="tip">Unseen Alerts</p>
            <p class="second-text">3</p>
        </div>
        <div class="cardi green">
            <p class="tip">No.of Appointment</p>
            <p class="second-text">10 Oct 2024</p>
        </div>
    </div>
</div>
        </div>
      </div>
      <h1 style="color: navy;margin-top: 10vh;margin-left: 20px;">Patient Talks</h1>
      <div class="card-container"  id="card-container">

        <div class="card">
          <div class="card-header">
            <p class="report-time">Oct 17, 2024 - 05:24 PM</p>
          </div>
          <div class="card-body">
            <div class="question">
              <h3>Have you eaten?</h3>
              <p>Yes</p>
            </div>
            <div class="question">
              <h3>Do you feel pain?</h3>
              <p>Mild</p>
            </div>
            <div class="question">
              <h3>Are you relieved?</h3>
              <p>A little</p>
            </div>
            <div class="question">
              <h3>Any stress?</h3>
              <p>No</p>
            </div>
            <div class="question">
              <h3>Taken meds?</h3>
              <p>Yes</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            
            <p class="report-time">Oct 17, 2024 - 05:24 PM</p>
          </div>
          <div class="card-body">
            <div class="question">
              <h3>Have you eaten?</h3>
              <p>Yes</p>
            </div>
            <div class="question">
              <h3>Do you feel pain?</h3>
              <p>Mild</p>
            </div>
            <div class="question">
              <h3>Are you relieved?</h3>
              <p>A little</p>
            </div>
            <div class="question">
              <h3>Any stress?</h3>
              <p>No</p>
            </div>
            <div class="question">
              <h3>Taken meds?</h3>
              <p>Yes</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            
            <p class="report-time">Oct 17, 2024 - 05:24 PM</p>
          </div>
          <div class="card-body">
            <div class="question">
              <h3>Have you eaten?</h3>
              <p>Yes</p>
            </div>
            <div class="question">
              <h3>Do you feel pain?</h3>
              <p>Mild</p>
            </div>
            <div class="question">
              <h3>Are you relieved?</h3>
              <p>A little</p>
            </div>
            <div class="question">
              <h3>Any stress?</h3>
              <p>No</p>
            </div>
            <div class="question">
              <h3>Taken meds?</h3>
              <p>Yes</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            
            <p class="report-time">Oct 17, 2024 - 05:24 PM</p>
          </div>
          <div class="card-body">
            <div class="question">
              <h3>Have you eaten?</h3>
              <p>Yes</p>
            </div>
            <div class="question">
              <h3>Do you feel pain?</h3>
              <p>Mild</p>
            </div>
            <div class="question">
              <h3>Are you relieved?</h3>
              <p>A little</p>
            </div>
            <div class="question">
              <h3>Any stress?</h3>
              <p>No</p>
            </div>
            <div class="question">
              <h3>Taken meds?</h3>
              <p>Yes</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2>Card 5</h2>
          <p>Content for card 5</p>
        </div>

        <div class="card">
          <h2>Card 6</h2>
          <p>Content for card 6</p>
        </div>
`;

var defaultselected = 0;
function chooseaside(num) {
  const idarray = ["overv", "appont", "alarm", "alert", "loca"];

  // Reset the previously selected tab
  const d = document.getElementById(idarray[defaultselected]);
  d.classList.remove("selected-tab"); // Remove active class

  // Apply the default content (this line should remain as per your existing logic)
  if (num == 0) {
    document.getElementById("main-content").innerHTML = defaultmain;
    intialchart();
  } else if (num == 1) {
    window.open("calendar.html", "_blank");
  } else if (num == 2) {
    getandsetAlarm();
  } else if (num == 3) {
    getandsetAlerts();
  } else if (num == 4) {
  }
  // Set the newly selected tab
  const r = document.getElementById(idarray[num]);
  r.classList.add("selected-tab"); // Add active class

  defaultselected = num; // Update the default selected tab index
}

function getandsetAlerts() {
  const defaultAlert = `
  <div class="alarm-container">
    <div class="alarm-header">
      <div style="display:flex;justify-content:space-between;"><h1>Patient Alerts</h1>
        <i onclick="hampress()" class="fa-solid fa-burger hambur" id="hambur"></i>
        </div>
      </div>


      <div class="AlarmList" id="AlarmList">
    <div class="cardA">
    <span>
    <h1>Aug 12 | 02:03 am</h1>
    <p>Heart Rate Change</p>
    </span>
    <span>
    <p>We detected a unsual heart beat recently</p>
    </span>
    </div>
    
    </div>


      </div>
  `;

  const p = document.getElementById("main-content");
  p.innerHTML = defaultAlert;
  getAlerts();
}

function getandsetAlarm() {
  
  const defaultAlarm = `
  <div class="alarm-container">
    <div class="alarm-header">
      <div style="display:flex;justify-content:space-between;"><h1>Patient Alarms</h1>
        <i onclick="hampress()" class="fa-solid fa-burger hambur" id="hambur"></i>
        </div>
      </div>


    <div id="alarmFormModal">
    <div class="alarm-form">
      <div class="timer">
      <input type="number" id="hours" class="time-input" min="0" max="23" placeholder="HH">
      <input type="number" id="minutes" class="time-input" min="0" max="59" placeholder="MM">
      </div>
      <select id="alarmType" class="alarm-input">
        <option value="Medicine">Medicine</option>
        <option value="Water">Water</option>
        <option value="Sleep">Sleep</option>
        <option value="Exercise">Exercise</option>
      </select>
      <input type="text" id="alarmMessage" class="message-input" placeholder="Enter a message (optional)">
      <label for="imageInput">Select an image or capture photo:</label>
      <input type="file" id="imageInput" accept="image/*" capture="camera" onchange="previewImage(event)">
      
      <!-- Image preview -->
      <div id="imagePreview" style="display: none;">
        <h4>Selected Image:</h4>
        <img id="selectedImage" src="" alt="Image preview" style="max-width: 50%; height: auto;">
      </div>

      <button class="add-alarm-btn" onclick="addAlarm()">Set New Alarm</button>

    </div>

    <div class="AlarmList" id="fuck">
    
    
    </div>
  </div>

  
`;

  const p = document.getElementById("main-content");
  p.innerHTML = defaultAlarm;

  getalarm();

}
function getalarm(){
  const alarmData = {
    actionType: "get_alarm",
    patient_id: "7",
  };
  fetch("https://hmkmj72l-7000.inc1.devtunnels.ms/alarm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alarmData),
  })
  .then((response) => {
    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(text); // Throw an error with the response text if not OK
      });
    }
    
    return response.json(); // Parse the response as JSON
  })
    .then((data) => {
      console.log("Success:", data);
      let dara = ``;
      data.forEach(element => {

        dara += `<div class="cardA">
    <span>
    <h1>${element.alarm_time}</h1>
    <p>${element.category}</p>
    </span>
    <span>
    <p>${element.message}</p>
    <i class="fa-solid fa-xmark icon-large"></i>

    </span>
    </div>`;


        
      });
      document.getElementById("fuck").innerHTML = dara; // Handle success with parsed data
      alert("Alarm started successfully!");
    })
    .catch((error) => {
      console.error("Error:", error); // Handle errors (network or server response)
      alert("Failed to start the alarm.");
    });

}



// alert code here

function getAlerts(){

  const alarmData = {
    actionType: "get_alerts",
    patient_id: "7",
  };
  fetch("https://hmkmj72l-7000.inc1.devtunnels.ms/alerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alarmData),
  })
  .then((response) => {
    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(text); // Throw an error with the response text if not OK
      });
    }
    
    return response.json(); // Parse the response as JSON
  })
    .then((data) => {
      console.log("Success:", data);
      let dara = ``;
      data.forEach(element => {

        dara += ` <div class="cardA">
    <span>
    <h1>${element.alert_message} | ${element.alert_time}</h1>
    <p>${element.alert_type}</p>
    </span>
    <span>
    <p>${element.alert_message}</p>
    </span>
    </div>
    
    </div>`;


        
      });
      console.log("no error");
      document.getElementById("AlarmList").innerHTML = dara; // Handle success with parsed data
      alert("Alarm started successfully!");
    })
    .catch((error) => {
      console.error("Error:", error); // Handle errors (network or server response)
      alert("Failed to start the alerts.");
    });

}

function getandsetLocation() {
  const defaultLocation = `
  
  `;
}

//alert
let alerts = document.getElementById("alert");
let dot = document.getElementsByClassName("alertdot");
alerts.addEventListener("mouseenter", () => {
    dot.style.backgroundColor = "white";
} );
alerts.addEventListener("mouseleave", () => {
  dot.style.backgroundColor = "blue";
} );
const user_acc=document.querySelector(".account");
