angular.module( "App" )

.factory( "mockAPI", [ "API",

    function ( API )
    {
        "use strict";

        var mockAPI = new API();

        return mockAPI;
    }

] );
