window.onload = function(){
  const inputs = document.querySelectorAll("form input");
  setInterval(function(){
    inputs.forEach(function(input){
      if(input.value === ""){
        input.classList.remove("focused");
      }
      else{
        input.classList.add('focused');
      }
    });
  }, 100);
  
  const buttons = document.querySelectorAll("form .actions button");
  
  buttons.forEach(function(button){
    button.addEventListener("click", function(e){
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      var ripple = document.createElement("span");
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      
      button.appendChild(ripple);
      setTimeout(function(){
        ripple.remove();
      }, 1000);
    });
  });
}