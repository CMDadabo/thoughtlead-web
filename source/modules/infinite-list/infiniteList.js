/**
 * @ngdoc  overview
 * @name   InfiniteList
 * @requires ngRoute
 *
 * @description Module to contain all pieces related to logging in and out.
 */
angular.module( "InfiniteList", [
    "ngRoute",
    "List",
    "Auth",
    "infinite-scroll",
    "infiniteScrollDecorator"
] )

.config( [ "$routeProvider",
    function ( $routeProvider )
    {
        "use strict";

        var requireUser = { user: [ "$location", "$rootScope", "$q", "API", "Session",
            function ( $location, $rootScope, $q, API, Session )
            {
                var deferred = $q.defer();

                    if( Session.get.authToken() )
                    {
                        if( Session.get.user() )
                        {
                            deferred.resolve( $rootScope.user );
                        }
                        else
                        {
                            $location.path( "/login" );
                        }
                    }
                    else
                    {
                        deferred.reject( "No user token" );
                        $location.path( "/login" );
                    }

                return deferred.promise;

            } ] };

        $routeProvider
            .when( "/app", {
                templateUrl: "modules/infinite-list/templates/infinite-list.html",
                controller: "InfiniteListCtrl",
                controllerAs: "infiniteList",
                resolve: requireUser,
                data: {
                    active: "infinite-list"
                }
            } );

    }
] );
