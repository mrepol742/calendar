function setDate() {

let a = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let b = a.getDay();
document.getElementById("currD").innerHTML = "<h1>" + days[b] + " | " + a.getDate() + "</h1>";

let size = document.querySelectorAll('li');
for (let i = 0; i < size.length; i++) {
    if (size[i].innerHTML == a.getDate() || days[b].toUpperCase().includes(size[i].innerHTML)) {
        size[i].classList.add('active');
    } else {
        size[i].classList.remove('active');
    }
}

document.getElementById("fullD").innerHTML = months[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear();
}

var intervalId = window.setInterval(function(){
    setDate();
}, 1000);