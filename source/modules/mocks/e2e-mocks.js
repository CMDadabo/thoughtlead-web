/* Mocks module */

angular.module( "e2e-mocks", [ "ngMockE2E", "ngRoute" ] )

.config( [ "$provide", "$routeProvider",

    function ( $provide, $routeProvider )
    {
        "use strict";

        // Sample route for seed purposes only, should be removed in project
        // (also remove "ngRoute" and "$routeProvider" from lines above)
        $routeProvider.when( "/mocks", {
            templateUrl: "/modules/mocks/templates/mocks.html",
            controller: "Mocks"
        } );

    }

] )

.run( [ "$httpBackend", "mockData", "APIRoot",

    function ( $httpBackend, mockData, APIRoot )
    {
        "use strict";

        var contacts = mockData;

        // Example: mock "GET", specify only data to be returned
        $httpBackend.when( "GET", APIRoot + "contacts/all" )

            .respond( contacts[ 0 ].concat( contacts[ 1 ] ) );

        $httpBackend.when( "GET", APIRoot + "contacts/page/:pg" )

            .respond( function( method, url, data, headers, params )
            {
                var page = Number( params.pg );
                return [ 200, { nextPage: page === 1, results: contacts[ page - 1 ], next: page === 1 } ];
            } );

        // Example: mock "POST", specify response status code and data to be returned
        $httpBackend.when( "POST", APIRoot + "contacts" )

            .respond( function( method, url, data )
            {
                data           = angular.fromJson( data );
                var newContact = data;
                var lastContactsPage = contacts[ contacts.length - 1 ];

                newContact.id  = lastContactsPage[ lastContactsPage.length - 1 ].id + 1;
                lastContactsPage.push( newContact );

                return [ 201, newContact ];
            } );

        // Example: mock "PUT", specify response status code and data to be returned
        $httpBackend.when( "PUT", APIRoot + "contacts/:id" )

            .respond( function( method, url, data )
            {
                data               = angular.fromJson( data );
                var updatedContact = data;
                for( var i = 0; i < contacts.length; i++ )
                {
                    if( contacts[ i ].id === Number( updatedContact.id ) )
                    {
                        contacts[ i ] = updatedContact;
                    }
                }
                return [ 200, updatedContact ];
            } );

        // Example: mock "DELETE", specify response status code, null data to be returned, and custom headers
        $httpBackend.when( "DELETE", APIRoot + "contacts/:id" )

            .respond( function( method, url, data, headers, params)
            {

                for( var i = 0; i < contacts.length; i++ )
                {
                    if( contacts[ i ].id === Number( params.id ) )
                    {
                        contacts.splice( i, 1 );
                        break;
                    }
                }

                return [
                    204,
                    null,
                    { someHeader: "value" }
                ];
            } );

        // Any content that still needs to be requested from an external source/HTTP request
        // needs to use passThrough(), including template files. Handlers are prioritized
        // by the order they are attached, meaning passThrough()s could be listed earlier.
        $httpBackend.when( "GET", /^\/build/ ).passThrough();

        // Fallback for all other routes, just in case. You 'may' need to list more than just the GET fallback.
        $httpBackend.when( "GET", /\*/ ).passThrough();
    }

] );

angular.module( "App" ).requires.push( "e2e-mocks" );
