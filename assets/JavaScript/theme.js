function switchTheme(data) {
  localStorage.setItem('theme', data);
  applyTheme();
}

function applyTheme(){
  var currentTheme = localStorage.getItem("theme");
  if(currentTheme == null){
    localStorage.setItem('theme', false);
    applyTheme();
  }
  else if(currentTheme == 'true'){
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelectorAll(".branding-img").forEach(function(brandingImage){
      brandingImage.src = "assets/Images/branding-white.png";
    })
  }
  else if(currentTheme == 'false'){
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelectorAll(".branding-img").forEach(function(brandingImage){
      brandingImage.src = "assets/Images/branding-black.png";
    })
  }
}

applyTheme();