require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'jquery.min',
        'jqueryui': 'jquery-ui.min',
        'bootstrap': 'bootstrap.min',
        'bootstrap-datepicker':'bootstrap/bootstrap-datepicker.min',
        'etpAdaptiveBehaviour': 'etpAdaptiveBehaviour'
    },
    shim: {
        'bootstrap':{deps: ['jquery']},
    }
});
 
require(['etpAdaptiveBehaviour'], function(aB){
        aB.addEvents(); //add some test events
        
        return {};
    }
);

require (['bootstrap-datepicker'], function(datepicker){
    !function(a){a.fn.datepicker.dates.ru={days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",format:"dd.mm.yyyy",weekStart:1}}(jQuery);
    
    
   $('*[data-module="datepicker"]').datepicker({'language':'ru'});
}
);
