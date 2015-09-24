angular.module( "Auth" )

/**
 * @ngdoc     function
 * @name      LogoutCtrl
 * @requires  $location
 * @requires  Session
 *
 * @description Controller for destroying a user session when they visit the
 *     logout route for the application.
 */
.controller( "LogoutCtrl", [ "$location", "Session",
    function ( $location, Session )
    {
        "use strict";

        Session.destroy();
        $location.path( "/login" );
    }
] );
