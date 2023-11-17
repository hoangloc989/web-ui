const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


var button = document.getElementById("burger");
var toggle= document.getElementById("toggle"); 
button.addEventListener("click", function() {
  toggle.checked? toggle.checked=false:toggle.checked=true;
});