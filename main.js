//스와이퍼
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
swiper.on("transitionEnd", function(e){
  var slideIndex='0'+ (swiper.activeIndex+1);
  document.getElementById("page_number").innerHTML = slideIndex;
});

//사이드 나브
$(document).ready(function () {
  $('.h_button').click(function () {
    $(this).toggleClass('on')
    $('.side_nav').toggleClass('on')
  });
});