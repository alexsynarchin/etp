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
        
        //set content area height to fit page
        $(document).ready(function(){
                //if($(document).height()<$(window).height()){
                //some condition for check if doc fit to window and not smaller - remove after enough content added
                    var conMinHeight = $(document).height() - 100 - 60 - 50;
                    $('body>.wrapper-gp>.content-gp').css('min-height',conMinHeight+'px');
                //}
        });
    }
);