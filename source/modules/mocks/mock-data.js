/* Data to pass to mocks module */

angular.module( "e2e-mocks" )

.value( "mockData",
{

    getThoughts : [
        {
            "id": 1,
            "link": "http://reallydopeinformativelink.com/article.html",
            "teams": [ 1, 5 ],
            "thoughtleader": 43,
            "description": "I thought this article was really dope and could help the teams.",
            "creation_date": "2015-09-24"
        },
        {
            "id": 2,
            "link": "http://reallydopeinformativelink.com/article.html",
            "teams": [ 1, 5 ],
            "thoughtleader": 43,
            "description": "I thought this article was really dope and could help the teams.",
            "creation_date": "2015-09-24"
        }
    ]
} );
