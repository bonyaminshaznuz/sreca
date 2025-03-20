window.onload = () => {
  setTimeout(() => {
    $(".preloader").addClass("hide");
    setTimeout(() => {
      $(".preloader").hide();
      document.body.style.overflow = "scroll";
    }, 500)
  }, 100)
}