let popup1 = document.getElementById("popup1");
function openPopup(){
  popup1.classList.add("open-popup");
}
function closePopup(){
  popup1.classList.remove("open-popup");
}
   setTimeout(openPopup) 
   window.close();
  5000;