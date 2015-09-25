/* Mocks module */

angular.module( "e2e-mocks", [ "ngMockE2E", "ngRoute" ] )

.run( [ "$httpBackend", "mockData", "APIRoot",

    function ( $httpBackend, mockData, APIRoot )
    {
        "use strict";

        $httpBackend.when( "GET", APIRoot + "thoughts/:id/afterthoughts/" )
            .respond( mockData.getAfterthoughts );

        $httpBackend.when( "POST", APIRoot + "thoughts/:id/afterthoughts/" )
            .respond( function ( method, url, data )
            {
                var newAfterThought = JSON.parse( data );
                newAfterThought.creationDate = "2015-9-25";
                newAfterThought.thoughtleader = 21;
                return [ 200, newAfterThought ];
            } );

        $httpBackend.when( "GET", APIRoot + "thoughts/" )
            .respond( mockData.getThoughts );

        $httpBackend.when( "POST", APIRoot + "thoughts/" )
            .respond( function ( method, url, data )
            {
                var newThought = JSON.parse( data );
                return [ 200, newThought ];
            } );

        $httpBackend.when( "GET", APIRoot + "teams/" )
            .respond( mockData.getTeams );

    }
] );

angular.module( "App" ).requires.push( "e2e-mocks" );
