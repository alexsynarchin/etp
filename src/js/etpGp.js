define(
    ['jquery'], 
    function ($) {
        
        //set register and login buttons centred on tablets
        var isTablet = 0;
        
        $(document).ready(function(){
            
            if ($(window).width()<800){
                $('.header-login').toggleClass('text-center');
                $('.header-login').toggleClass('text-right');
                isTablet = 1;
            }
            if ($(window).width()>=800 && isTablet == 1){
                $('.header-login').toggleClass('text-center');
                $('.header-login').toggleClass('text-right');
                isTablet = 0;
            }
        });
            
        $(window).resize(function(){
            if ($(window).width()<800 && isTablet == 0){
                $('.header-login').toggleClass('text-center');
                $('.header-login').toggleClass('text-right');
                isTablet = 1;
                console.log(isTablet);
            }
            if ($(window).width()>=800 && isTablet == 1){
                $('.header-login').toggleClass('text-center');
                $('.header-login').toggleClass('text-right');
                isTablet = 0;
                console.log(isTablet);
            }
        });
    }
);