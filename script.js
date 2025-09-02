let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm'); // Add this in your HTML

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    // Convert 24hr to 12hr format
    hours = hours % 12;
    hours = hours ? hours : 12; // if 0 then 12

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampm.innerHTML = period;

}, 1000);