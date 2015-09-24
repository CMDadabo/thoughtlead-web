angular.module( "App" )

/**
 * @ngdoc     service
 * @name      App.User
 *
 * @description
 * Service for managing user-related API interactions.
 */
.service( "User", [ "mockAPI", "APIRoot",
    function ( mockAPI, APIRoot )
    {
        "use strict";

        var user = {};

        user.getAll = function ()
        {
            return mockAPI.$get( APIRoot + "contacts/all" );
        };

        user.update = function ( item )
        {
            return mockAPI.$put( APIRoot + "contacts/" + item.id, item );
        };

        user.create = function ( item )
        {
            return mockAPI.$post( APIRoot + "contacts" + item.id, item );
        };

        user.delete = function ( item )
        {
            return mockAPI.$delete( APIRoot + "contacts/" + item.id );
        };

        user.resetPassword = function ( user )
        {
            return mockAPI.$post( APIRoot + "user/reset_password", { email: user.email } );
        };

        return user;

    }
] );
