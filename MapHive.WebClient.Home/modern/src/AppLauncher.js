//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('Home.AppLauncher', {

    requires: [
        'Home.view.main.Viewport'
    ],

    constructor: function(config){

            //Do whatever the customisation are required - running in an iframe vs standalone...

            //init the GUI
            Ext.create('Home.view.main.Viewport');
        }
    });
}());