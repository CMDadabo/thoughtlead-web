/* Mocks module */

angular.module( "e2e-mocks", [ "ngMockE2E", "ngRoute" ] )

.run( [ "$httpBackend", "mockData", "APIRoot",

    function ( $httpBackend, mockData, APIRoot )
    {
        "use strict";

        $httpBackend.when( "GET", APIRoot + "thoughts/" )
            .respond( mockData.getThoughts );

        $httpBackend.when( "GET", APIRoot + "teams/" )
            .respond( mockData.getTeams );

    }
] );

angular.module( "App" ).requires.push( "e2e-mocks" );
