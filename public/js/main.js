requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery.min',
        jqueryui: 'jquery-ui.min',
        bootstrap: 'bootstrap.min',
        etpAdaptiveBehaviour: 'etpAdaptiveBehaviour'
    },
    shim: {
        'bootstrap':{deps: ['jquery']},
    }
});
 
requirejs([
    'etpAdaptiveBehaviour',
    ], function(aB){
        aB.addEvents(); //add some test events
        
        // this is where all the site code should begin
        return {};
    }
);

requirejs([
    'blockMinimize'
    ],
    function(){
    }
);