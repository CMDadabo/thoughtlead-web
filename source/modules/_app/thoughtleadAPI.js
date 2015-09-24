angular.module( "App" )

.factory( "thoughtleadAPI", [ "API", "APIRoot",

    function ( API, APIRoot )
    {
        "use strict";

        var thoughtleadAPI = new API();
        thoughtleadAPI.rootPath = APIRoot;

        return thoughtleadAPI;
    }

] );
