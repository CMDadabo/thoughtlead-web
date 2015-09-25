/* Data to pass to mocks module */

angular.module( "e2e-mocks" )

.value( "mockData",
{

    getThoughts : [
        {
            "id": 2,
            "link": "http://gizmodo.com/samsungs-new-gear-vr-only-costs-100-1732831241",
            "teams": [ 1, 5 ],
            "thoughtleader": 43,
            "description": "Samsung Gear VR",
            "creation_date": "2015-09-24"
        },
        {
            "id": 1,
            "link": "http://techcrunch.com/2015/09/24/early-bird-tickets-to-disrupt-london-are-now-available/",
            "teams": 1,
            "thoughtleader": 43,
            "description": "Disrupt London",
            "creation_date": "2013-09-24"
        },
        {
            "id": 3,
            "link": "http://davidwalsh.name/impostor-syndrome",
            "teams": [ 1, 2, 3, 4, 5 ],
            "thoughtleader": 43,
            "description": "I'm an Impostor",
            "creation_date": "2015-05-06"
        }

    ],

    getTeams : [
        {
            "id": "",
            "name": "All"
        },
        {
            "id": 1,
            "name": "developers"
        },
        {
            "id": 5,
            "name": "bizdev"
        }
    ]
} );
