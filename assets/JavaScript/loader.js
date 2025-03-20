function showLoader(key){
  if(key){
    document.body.innerHTML += `
      <div class="loader">
        <div class="branding">
          <img src="assets/Images/branding-s.png" alt="Sreca" />
        </div>
      </div>
    `;
  }
  else{
    $(".loader").hide();
  }
}