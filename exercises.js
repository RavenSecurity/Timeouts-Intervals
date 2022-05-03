window.onload = function() {

// Exercise 1

let str = 'Typewritter'.split('');

const interval = setInterval(() => {
  let type = document.querySelector(".typew")
  type.innerText = type.innerText + str[0];
  str = str.slice(1);
  
  if (!str.length) {
    clearInterval(interval);
  }
}, 1000);

// Exercise 2

function displaySecond() {
    let timer = document.querySelector(".timer");
    timer.innerHTML = Number(timer.innerHTML) + 1;

    if (timer.innerHTML == 60) {
    let minute = document.querySelector(".minute");
    timer.innerHTML = 0;
    minute.innerHTML = Number(minute.innerHTML) + 1;
    if (minute.innerHTML === "1")
      document.querySelector(".passed").innerHTML = " minute has passed";
    else document.querySelector(".passed").innerHTML = " minutes have passed";
  }
}

let intervalTwo = setInterval(displaySecond, 1000);

}