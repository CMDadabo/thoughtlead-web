/**
 * @ngdoc  overview
 * @name   App
 * @requires ngRoute
 * @requires ngTouch
 * @requires ngSanitize
 * @requires ngDialog
 * @requires ui.mask
 * @requires vokal.API
 * @requires Auth
 * @requires List
 * @requires InfiniteList
 *
 * @description Our application module.
 */
angular.module( "App", [
    "ngRoute",
    "ngTouch",
    "ngSanitize",
    "ngDialog",
    "ui.mask",
    "vokal.API",
    "Auth",
    "List",
    "InfiniteList",
    "luegg.directives"
] )

.run( [ "$rootScope", "$location", "Session", "$route",
    function ( $rootScope, $location, Session, $route )
    {
        "use strict";

        $rootScope.$route = $route;
        $rootScope.$on( "$routeChangeSuccess", function ( ev, data )
        {
            // Set body class based on controller
            if ( data.$$route && data.$$route.controller )
            {
                $rootScope.controller = data.$$route.controller;
            }

            if( Session.get.authToken() && Session.get.user() && $location.path() === "/login" )
            {
                $location.path( "/app" );
            }
        } );

        toastr.options = {
            positionClass: "toast-bottom-right"
        };
    }
] )

.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",

    function ( $routeProvider, $locationProvider, $sceDelegateProvider )
    {
        "use strict";

        $routeProvider.otherwise( { redirectTo: "/login" } );

        $locationProvider.html5Mode( true ).hashPrefix( "!" );

        $sceDelegateProvider.resourceUrlWhitelist(
            [ "self" ]
        );

    }

] )

.constant( "APIRoot", "{{ APIROOT }}" );
