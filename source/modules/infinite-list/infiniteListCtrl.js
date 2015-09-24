angular.module( "InfiniteList" )

/**
 * @ngdoc     function
 * @name      LoginCtrl
 * @requires  infiniteScrollDecorator
 * @requires  thoughtleadAPI
 *
 * @description Controller for infinite scrolling list views.
 */
.controller( "InfiniteListCtrl", [ "infiniteScrollDecorator", "thoughtleadAPI", "APIRoot", "Thought", "$sce",
    function ( infiniteScrollDecorator, thoughtleadAPI, APIRoot, Thought, $sce )
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

        ctrl.currentThought = "";

        ctrl.getListItems = function ()
        {
            Thought.getAll()
            .then( function ( results ) {
                ctrl.list = results.data;
                ctrl.currentThought = ctrl.list[ 0 ];
                ctrl.currentThought.link = $sce.trustAsResourceUrl( ctrl.currentThought.link );
            } );

            Thought.getTeams()
            .then( function ( results )
            {
                console.dir( results.data );
            } );
        };

        ctrl.makeCurrentThought = function ( thought )
        {
            ctrl.currentThought = thought;
            ctrl.currentThought.link = $sce.trustAsResourceUrl( thought.link );
        };

        // Run on Load
        ctrl.getListItems();

    }
] );
