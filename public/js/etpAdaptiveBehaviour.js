define(
    ['jquery', 'bootstrap'], 
    function ($ , _bootstrap) {
        var aB = {
            addEvents: function(){
                $(document).ready(function(){
                    
                    //listen to sidebar toggle event
                    $('.sidebar__toggle').click(function(){    
                        if($(window).width()>800){
                            
                            if($('body').hasClass('sidebar-expanded')){
                                $('body').removeClass('sidebar-expanded');
                            }
                            
                            if($('body').hasClass('sidebar-collapsed')){
                                $('body').removeClass('sidebar-collapsed');
                            } else {
                                $('body').addClass('sidebar-collapsed');
                            }
                        } else {
                            if($('body').hasClass('sidebar-collapsed')){
                                $('body').removeClass('sidebar-collapsed');
                            }
                            
                            if($('body').hasClass('sidebar-expanded')){
                                $('body').removeClass('sidebar-expanded');
                            } else {
                                $('body').addClass('sidebar-expanded');
                            }
                        }
                    });
                });
            }
        }
        return aB;
    }
);