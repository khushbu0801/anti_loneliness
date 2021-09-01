jQuery(document).ready(function () {
    new Typed(".text", {
        strings: ["Live, Love, Laugh", "We are With You", "Don't Feel Alone."],
        typeSpeed: 100,
        loop: true
    });
    
    $(window).scroll(function(){
        var top=$(window).scrollTop();
            if(top>=20){
                $("nav").addClass('secondary');
            }
            else
                if($("nav").hasClass('secondary')){
                    $("nav").removeClass('secondary');
                }
    });
    $("#counseling-members").owlCarousel({
       items:3,
       autoplay:true,
       smartSpeed:700,
       loop:true,
       autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            760:{
                items:3
            }
        }       
    });
});

