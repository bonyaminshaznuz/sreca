function showCheckoutBox(){
  $(".page-body .right-elements").addClass("show");
}
function hideCheckoutBox(){
  $(".page-body .right-elements").removeClass("show");
}

function addQuantity(key){
  console.log(key)
  const input = document.querySelector("."+key+" .quantity .count");

  input.value = parseInt(input.value) + 1;
}

function removeQuantity(key){
  const input = document.querySelector("."+key+" .quantity .count");

  if(input.value == 1){
    return;
  }

  input.value = parseInt(input.value) - 1;
}

window.onload = () => {
  const inputs = document.querySelectorAll(".product-card .quantity .count");
  console.log(inputs)
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      console.log("changed")
      if(parseInt(input.value) < 1){
        input.value = 1;
      }
    })
  })
}