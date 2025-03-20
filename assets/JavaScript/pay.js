function showForm(key){
  $(".payments-container .card").removeClass('active');
  $(".payments-container .card."+key).addClass('active');

  $("form .inputs").hide();
  $("form .inputs."+key+"-inputs").show();
}

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", (e) => {
    var key = e.target.getAttribute('key');
    console.log(key)

    const cb = navigator.clipboard;
    cb.writeText(document.querySelector('.'+key+'-inputs p span').innerText)
  })
})