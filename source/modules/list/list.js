/**
 * @ngdoc  overview
 * @name   List
 * @requires ngRoute
 *
 * @description Module to contain all pieces related to logging in and out.
 */
angular.module( "List", [
    "ngRoute",
    "Auth",
    "angular-table"
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
            .when( "/list", {
                templateUrl: "modules/list/templates/list.html",
                controller: "ListCtrl",
                controllerAs: "list",
                resolve: requireUser,
                data: {
                    active: "list"
                }
            } );

    }
] );
