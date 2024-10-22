const customAlert = document.getElementById("custom-alert");
const okBtn = document.getElementById("ok-btn");
const cancelBtn = document.getElementById("cancel-btn");

function showdialog() {
  customAlert.style.display = "flex";
}

// Function to hide alert
cancelBtn.addEventListener("click", function () {
  customAlert.style.display = "none"; // Hide alert box
});

// Function to run on OK
okBtn.addEventListener("click", function () {
  runOkFunction(); // Run the desired function
  customAlert.style.display = "none"; // Hide alert box
});

// Function that runs on OK
function runOkFunction() {
  alert("OK button clicked!"); // Example action
}
function previewImage(event) {
  const imagePreview = document.getElementById("imagePreview");
  const selectedImage = document.getElementById("selectedImage");

  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImage.src = e.target.result;
      imagePreview.style.display = "block"; // Show the preview
    };
    reader.readAsDataURL(file); // Convert file to base64 string
  }
}

function isValidTime() {
  // Get the values from the input fields
  const hours = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;

  // Check if the hours and minutes are within valid range
  if (hours === "" || minutes === "") {
    alert("Please enter both hours and minutes.");
    return false;
  }

  if (hours < 0 || hours > 23) {
    alert("Invalid hours. Please enter a value between 0 and 23.");
    return false;
  }

  if (minutes < 0 || minutes > 59) {
    alert("Invalid minutes. Please enter a value between 0 and 59.");
    return false;
  }

  return true; // If valid
}
function addAlarm() {
    let h = document.getElementById("hours").value;
    let m = document.getElementById("minutes").value;
    let t = document.getElementById("alarmType").value;
    let me = document.getElementById("alarmMessage").value.toString();
  if (isValidTime()) {
    const alarmData = {
      actionType: "start_alarm",
      alarm_time: `${h}:${m}`, // Sample time
      message: me, // Message for the alarm
      frequency: "daily", // Alarm frequency
      category: t, // Alarm category
      alarm_id: 1, // Unique alarm ID
      image_url: "tobemade",
      patid:"7", // Image URL (if applicable)
    };

    // Use fetch API to send POST request to the Node.js backend
    fetch("https://hmkmj72l-7000.inc1.devtunnels.ms/alarm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alarmData),
      })
        .then((response) => {
          // Log the raw response
          return response.text().then((text) => {
            console.log("Response:", text); // Log the response text
            if (response.ok) {
              return text;// Return parsed JSON or empty object
            } else {
              return Promise.reject(text); // Reject if response status is not OK
            }
          });
        })
        .then((data) => {
          console.log("Success:", data); // Handle success with parsed data
          getandsetAlarm();
        })
        .catch((error) => {
          console.error("Error:", error); // Handle errors (network or server response)
          alert("Failed to start the alarm.");
        });
      
  }
}
