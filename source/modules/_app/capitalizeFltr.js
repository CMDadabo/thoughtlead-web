angular.module( "App" )

.filter( "capitalize", function ()
{
    "use strict";

    return function ( input )
    {
        return input.substring( 0, 1 ).toUpperCase() + input.substring( 1 );
    };
} );
