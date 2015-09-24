angular.module( "Auth" )

/**
 * @ngdoc     function
 * @name      LoginCtrl
 * @requires  $scope
 * @requires  $rootScope
 * @requires  $location
 * @requires  API
 * @requires  Session
 * @requires  User
 *
 * @description Controller for the main login page.
 */
.controller( "LoginCtrl", [ "$scope", "$rootScope", "$location", "Session", "User",
    function ( $scope, $rootScope, $location, Session, User )
    {
        "use strict";

        $scope.userResetPassword = false;
        $scope.resetPasswordVisible = false;
        $scope.emailSent = false;

        $scope.credentials = {
            email: "",
            password: ""
        };

        $scope.login = function ( credentials )
        {
            // API.$post(UrlHelper.login(),
            //     {
            //         email: $scope.credentials.email,
            //         password: $scope.credentials.password
            //     }
            // )
            // .success( function ( data ) {
            //     Session.create( data );
            // })
            // .error( function ( data ) {
            //     console.log ( data );
            // });

            // Flow Placeholder, remove for above
            var user = {
                auth_token: "kjlwkejwdcWEwelkj",
                role_id: "14",
                phone_number: "1234567890",
                email: "test@test.com",
                role: "Admin"
            };

            Session.create( user );
        };

        $scope.showResetPasswordForm = function ()
        {
            $scope.userResetPassword = true;
            $scope.resetPasswordVisible = true;
        };

        $scope.sendResetPasswordEmail = function ( user )
        {
            User.resetPassword( user )
            .success( function ()
            {
                // TODO: Show messaging: "Please check your email" or something.
                $scope.resetPasswordVisible = false;
                $scope.emailSent = true;
            })
            .error( function ()
            {
                toastr.error( "Oops, Something went wrong, please try again.", "Error" );
            });
        };
    }
] );
