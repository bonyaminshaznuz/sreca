var showVariations = false;

setInterval(function(){
  if(showVariations){
    document.querySelector(".variations").classList.add("show");
  }
  else{
    document.querySelector(".variations").classList.remove("show");
  }
}, 100);