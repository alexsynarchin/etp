define(
    ['jquery', 'jqueryui', 'bootstrap'], 
    function ($ , jqueryui, _bootstrap) {
        var aB = {
            addEvents: function(){
                $(document).ready(function(){
                    
                    //jquery-ui datepicker staff:
                    //Translation. Very bad solution actually! this should work as external easily updatable module not just hard-coded stuff!
                    $.datepicker.regional.ru = {
                        closeText: "Закрыть",
                        prevText: "&#x3C;Пред",
                        nextText: "След&#x3E;",
                        currentText: "Сегодня",
                        monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
                        "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
                        monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
                        "Июл","Авг","Сен","Окт","Ноя","Дек" ],
                        dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
                        dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
                        dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
                        weekHeader: "Нед",
                        dateFormat: "dd.mm.yy",
                        firstDay: 1,
                        isRTL: false,
                        showMonthAfterYear: false,
                        yearSuffix: "" 
                    };
                    $.datepicker.setDefaults(
                        $.datepicker.regional[ "ru" ]
                    );
                    
                    //replace this listeners as the do not relate to responsiveness
                    $(".etp-search-result-filters__filter-bid-time input").datepicker();
                    $(".etp-search-result-filters__filter-publishing-date input").datepicker();
                    $(".etp-search-result-filters__filter-end-time input").datepicker();
                    
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