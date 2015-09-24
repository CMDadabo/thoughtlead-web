/**
 * @ngdoc  overview
 * @name   Auth
 * @requires ngRoute
 *
 * @description Module to contain all pieces related to logging in and out.
 */
angular.module( "Auth", [
    "ngRoute",
    "LocalStorageModule",
    "vokal.API"
] )

.config( [ "$routeProvider",
    function ( $routeProvider )
    {
        "use strict";
        
        $routeProvider
            .when( "/login", {
                templateUrl: "modules/auth/templates/login.html",
                controller: "LoginCtrl"
            } )
            .when( "/logout", {
                template: " ",
                controller: "LogoutCtrl"
            } );

    }
] );
