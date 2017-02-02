//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     *
     */
    Ext.define('Home.view.main.MainController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.viewport',

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localisation'
        ],

        requires: [
            'Ext.panel.Panel',
            'Home.view.main.MainLocalisation'
        ],

        init: function(){
            this.callMeParent('init', arguments);

            //inject some stuff to the body for the time being so it looks like something is dynamic...
            this.getView().setHtml(
                'This is a simple HOME app. It kicks in when there is neither APP nor ORGANIZATION context.' +
                '<br/>It\'ll contain some nice "MainPage" like stuff...' +
                '<br/><img src="resources/images/hivetemp.jpg"/>'
            );
        }
    });

}());