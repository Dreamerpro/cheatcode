$(function(){   

    var $window = $(window);
    var scrollTime = 1.4;
    var scrollDistance = 170;

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault(); 

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5                            
            });

    });

    $(window).keydown(function(event){
        
        
    if(event.which==40){
        event.preventDefault(); 

        var delta = -2;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5                            
            });
    }
    if(event.which==38){
        event.preventDefault(); 

        var delta = 2;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5                            
            });
    }


    });
});