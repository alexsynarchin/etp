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
                    
                    //this will snap footer to bottom - replace?
                    var conMinHeight = $(document).height() -100 - 60;
                    $('body>.wrapper>.content').css('min-height',conMinHeight+'px');
                    $('body>.wrapper>.main-footer').removeClass('main-footer_hidden');
                    
                    //set aside heigh to fit document
                    if($('.sidebar').height() < $(document).height()-100-60){
                        var h = $(document).height()+'px';
                        $('.sidebar').css('height' , h);                
                    }
                    
                });
            }
        }
        return aB;
    }
);