angular.module( "App" )

/**
 * @ngdoc     service
 * @name      App.Thought
 *
 * @description
 * Service for managing thought API interactions.
 */
.service( "Thought", [ "thoughtleadAPI",
    function ( thoughtleadAPI )
    {
        "use strict";

        var thought = {};

        thought.getAll = function ()
        {
            return thoughtleadAPI.$get( "thoughts/" );
        };

        thought.update = function ( item )
        {
            return thoughtleadAPI.$put( "thoughts/" + item.id, item );
        };

        thought.create = function ( item )
        {
            return thoughtleadAPI.$post( "thoughts" + item.id, item );
        };

        thought.delete = function ( item )
        {
            return thoughtleadAPI.$delete( "thoughts/" + item.id );
        };

        thought.getTeams = function ()
        {
            return thoughtleadAPI.$get( "teams/" );
        };

        return thought;

    }
] );
