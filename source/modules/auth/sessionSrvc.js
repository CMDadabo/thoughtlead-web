angular.module( "Auth" )

/**
 * @ngdoc     service
 * @name      Auth.Session
 * @requires  localStorageService
 * @requires  $rootScope
 * @requires  $location
 * @requires  $http
 *
 * @description
 * Service that manages user session.
 */
.service( "Session", [ "localStorageService", "$rootScope", "$location", "$http",
    function ( localStorageService, $rootScope, $location, $http )
    {
        "use strict";

        this.create = function ( user )
        {
            // Set Globals for API service
            $rootScope.authToken = user.auth_token;
            $rootScope.user = user;

            // Local Storage Session management
            localStorageService.set( "authToken", user.auth_token );
            localStorageService.set( "user.roleId", user.role_id );
            localStorageService.set( "user.phoneNumber", user.phone_number );
            localStorageService.set( "user.email", user.email );
            localStorageService.set( "user.role", user.role );

            // Redirect to list on session create
            $location.path( "/app" );
        };

        this.get = {

            authToken: function () {
                return localStorageService.get( "authToken" );
            },

            user: function () {
                return {
                    role_id: localStorageService.get( "user.roleId" ),
                    phone_number: localStorageService.get( "user.phoneNumber" ),
                    email: localStorageService.get( "user.email" ),
                    role: localStorageService.get( "user.role" )
                };
            }

        };

        this.destroy = function ()
        {
            $rootScope.authToken = null;
            $rootScope.user = null;
            localStorageService.clearAll();
        };

        return this;
    }

] );
