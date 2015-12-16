requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery.min',
        jqueryui: 'jquery-ui.min',
        bootstrap: 'bootstrap.min',
        etpAdaptiveBehaviour: 'etpAdaptiveBehaviour'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs([
    'jquery',
    'jqueryui',
    'bootstrap',
    'etpAdaptiveBehaviour'
    ], function($, _jqueryui, _bootstrap, aB){
        aB.addEvents(); //add some test events
        
        // this is where all the site code should begin
        return {};
});