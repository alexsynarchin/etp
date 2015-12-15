requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery.min',
        bootstrap: 'bootstrap.min'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs([
    'jquery', 
    'bootstrap'
    ], function($, _bootstrap){
        // this is where all the site code should begin
        return {};
});