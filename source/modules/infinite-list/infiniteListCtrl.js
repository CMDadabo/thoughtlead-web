angular.module( "InfiniteList" )

/**
 * @ngdoc     function
 * @name      LoginCtrl
 * @requires  infiniteScrollDecorator
 * @requires  mockAPI
 *
 * @description Controller for infinite scrolling list views.
 */
.controller( "InfiniteListCtrl", [ "infiniteScrollDecorator", "mockAPI", "APIRoot",
    function ( infiniteScrollDecorator, mockAPI, APIRoot )
    {
        "use strict";

        var ctrl = this;

        ctrl.list = [];

        ctrl.getListItems = function ( reload )
        {
            if( ctrl.list && reload )
            {
                ctrl.list.reload();
            }
            else
            {
                ctrl.list = new infiniteScrollDecorator( APIRoot + "contacts/page/{page}", mockAPI );
            }
        };

        // Run on Load
        ctrl.getListItems();

    }
] );
