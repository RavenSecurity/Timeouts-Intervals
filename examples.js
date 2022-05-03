window.onload = function() {

    // Combining Timeouts & Events

function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);
  });
  document.body.appendChild(button);

    // Combing Recursion & SetInterval

// let times = 0;
// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;

//   const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
//   setInterval(heyYou, 1000);
// }

    // Cleaning

let interval;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

buttonThreeSeconds = document.createElement("button");
buttonThreeSeconds.textContent = "say hey every 3 seconds";
buttonThreeSeconds.addEventListener("click", () => {
  interval = setInterval(heyYou, 3000);
});

buttonStop = document.createElement("button");
buttonStop.textContent = "Stop saying hey";
buttonStop.addEventListener("click", () => {
  // We must first check if there is an interval
  if (interval != undefined) {
    clearInterval(interval);
  }
});

document.body.appendChild(buttonThreeSeconds);
document.body.appendChild(buttonStop);
}



    