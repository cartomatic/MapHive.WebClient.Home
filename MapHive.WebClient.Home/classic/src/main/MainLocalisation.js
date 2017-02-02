//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('Home.view.main.MainLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {

            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());