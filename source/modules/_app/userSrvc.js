angular.module( "App" )

/**
 * @ngdoc     service
 * @name      App.User
 *
 * @description
 * Service for managing user-related API interactions.
 */
.service( "User", [ "thoughtleadAPI", "APIRoot",
    function ( thoughtleadAPI, APIRoot )
    {
        "use strict";

        var user = {};

        user.getAll = function ()
        {
            return thoughtleadAPI.$get( APIRoot + "contacts/all" );
        };

        user.update = function ( item )
        {
            return thoughtleadAPI.$put( APIRoot + "contacts/" + item.id, item );
        };

        user.create = function ( item )
        {
            return thoughtleadAPI.$post( APIRoot + "contacts" + item.id, item );
        };

        user.delete = function ( item )
        {
            return thoughtleadAPI.$delete( APIRoot + "contacts/" + item.id );
        };

        user.resetPassword = function ( user )
        {
            return thoughtleadAPI.$post( APIRoot + "user/reset_password", { email: user.email } );
        };

        return user;

    }
] );
