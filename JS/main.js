/* start carousel */

function clacHeight() {

    var mySlide = document.querySelector(".carousel-inner"),

        caurousel = document.querySelectorAll(".carousel-item"),

        upperBar = document.querySelector(".uper-bar").clientHeight,
    
        navBar = document.querySelector(".navbar").clientHeight,

        winH = window.innerHeight,

        hgh = winH - (upperBar + navBar);

    mySlide.style.height = hgh + "px";

    for (var i = 0; i < caurousel.length; i++) {
        
          caurousel[i].style.height = hgh + "px";
    }
  
  
}
clacHeight();

// Jquery
// start featuers work

$('.featured-work ul li').on('click', function () {
    
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).data('class') === "all") {
        
            $(".parint-img .row .col-md img").css("opacity", 1)
        }else
            
          $(".parint-img .row .col-md img").css("opacity", 0.1)
            
       $($(this).data('class')).css('opacity', 1)
})