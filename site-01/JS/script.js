$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }

        else{
           $(".navbar").removeClass("sticky");
           $(".goTop").fadeOut();
        }
    });

    $(".menu-toggler").click(function(){
        $(this).togglerClass("active");
        $(".navbar-menu").togglerClass("active");
        
    });

    $(".goTop").click(function(){scroll(0,0)});

    $(".works").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{enabled:true}
    });
});