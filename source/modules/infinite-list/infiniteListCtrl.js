angular.module( "InfiniteList" )

/**
 * @ngdoc     function
 * @name      LoginCtrl
 * @requires  infiniteScrollDecorator
 * @requires  thoughtleadAPI
 *
 * @description Controller for infinite scrolling list views.
 */
.controller( "InfiniteListCtrl", [ "infiniteScrollDecorator", "thoughtleadAPI", "APIRoot", "Thought",
    function ( infiniteScrollDecorator, thoughtleadAPI, APIRoot, Thought )
    {
        "use strict";

        var ctrl = this;

        ctrl.list = [];

        // ctrl.getListItems = function ( reload )
        // {
        //     if( ctrl.list && reload )
        //     {
        //         ctrl.list.reload();
        //     }
        //     else
        //     {
        //         ctrl.list = new infiniteScrollDecorator( APIRoot + "thoughts/", thoughtleadAPI );
        //     }
        // };

        ctrl.getListItems = function ()
        {
            Thought.getAll()
            .then( function ( results ) {
                ctrl.list = results.data;
                console.dir( ctrl.list );
            } );
        };

        // Run on Load
        ctrl.getListItems();

    }
] );
