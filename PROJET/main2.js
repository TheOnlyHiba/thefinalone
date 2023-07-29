// hedhi el pop up mtaa el bronz

let popup1 = document.getElementById("popup1");
function openPopup(){
  popup1.classList.add("open-popup");
}
function closePopup(){
  popup1.classList.remove("open-popup");
}
// hedhi el pop up mtaa el silver

let popup2 = document.getElementById("popup2");
function showPup(){
    popup2.classList.add("open-popup2")
}
function closePup(){
    popup2.classList.remove("open-popup2")
}

// hedhi pop up mtaa el golden

let popup3 = document.getElementById("popup3");
function opnPup(){
    popup3.classList.add("open-popup3")
}
function clsPup(){
    popup3.classList.remove("open-popup3")
}

// lina nliki el pages

const button = document.getElementById('link1');
button.addEventListener('click', function() {
  window.location.href = 'women.html'
});

const button2 = document.getElementById('link2');
button2.addEventListener('click', function() {
  window.location.href = 'calithnecis.html'
});

const button3 = document.getElementById('link3');
button3.addEventListener('click', function() {
  window.location.href = 'cardio.html'
});



const button4 = document.getElementById('link4');
button4.addEventListener('click', function() {
  window.location.href = 'lifting.html'
});