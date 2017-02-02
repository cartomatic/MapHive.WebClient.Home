//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * App launcher
     */
    Ext.define('Home.AppLauncher', {

    requires: [
        'Ext.tip.QuickTipManager',
        'Home.view.main.Main',
        'mh.module.appBar.AppBar'
    ],

    constructor: function(config){

            Ext.QuickTips.init();

            //init the GUI
            Ext.create('Home.view.main.Main', {
                dockedItems: [
                    //standardised app top tbar
                    {
                        xtype: 'mh-app-bar',
                        cls: 'mh-app-bar-shadow'
                    }
                ]
            });
        }
    });

}());