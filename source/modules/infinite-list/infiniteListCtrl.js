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
        ctrl.addingThought = false;
        ctrl.editingThought = {
            link: "",
            teams: [],
            description: ""
        };

        ctrl.getListItems = function ()
        {
            Thought.getAll()
            .then( function ( results ) {
                ctrl.list = results.data;

                for( var i = 0; i < ctrl.list.length; i++ )
                {
                    ctrl.list[ i ].isCurrent = false;
                }

                ctrl.list[ 0 ].isCurrent = true;
                ctrl.currentThought = ctrl.list[ 0 ];
                ctrl.currentThought.link = $sce.trustAsResourceUrl( ctrl.currentThought.link );
            } );

            Thought.getTeams()
            .then( function ( results )
            {
                ctrl.teams = results.data;
            } );
        };

        ctrl.makeCurrentThought = function ( thought )
        {
            for( var i = 0; i < ctrl.list.length; i++ )
            {
                ctrl.list[ i ].isCurrent = false;
            }
            thought.isCurrent = true;
            ctrl.currentThought = thought;
            ctrl.currentThought.link = $sce.trustAsResourceUrl( thought.link );
            ctrl.addingThought = false;
        };

        ctrl.saveThought = function ( thought )
        {
            if( thought.teams.length < 1 )
            {
                toastr.error( "Please select at least one team.", "Error" );
            }

            thought.teams = thought.teams.map( function ( value, index )
            {
                if( value )
                {
                    return index;
                }
            } );

            Thought.create( thought )
            .then( function ( response )
            {
                ctrl.list.push( response.data );
                ctrl.addingThought = false;
                ctrl.makeCurrentThought( response.data );
                toastr.success( "New Thought posted.", "Success" );
                ctrl.editingThought = {
                    link: "",
                    teams: [],
                    description: ""
                };
            } );

        };

        // Run on Load
        ctrl.getListItems();

    }
] );
