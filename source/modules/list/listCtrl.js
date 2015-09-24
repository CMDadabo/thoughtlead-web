angular.module( "List" )

/**
 * @ngdoc     function
 * @name      ListCtrl
 * @requires  $filter
 * @requires  ngDialog
 * @requires  mockAPI
 * @requires  User
 *
 * @description Controller for paginated list views.
 */
.controller( "ListCtrl", [ "$filter", "ngDialog", "mockAPI", "User", "$scope",
    function ( $filter, ngDialog, mockAPI, User, $scope )
    {
        "use strict";

        var ctrl = this;

        // angular-table config
        ctrl.config = {
            itemsPerPage: 8,
            fillLastPage: true
        };

        ctrl.list = [];
        ctrl.filteredList = [];

        function getIndexById ( id )
        {
            for ( var i = 0; i < ctrl.list.length; i++ )
            {
                if ( ctrl.list[ i ].id === id )
                {
                    return i;
                }
            }
            return null;
        }

        ctrl.getList = function ()
        {
            User.getAll()
            .then( function ( response )
            {
                ctrl.list = response.data;
                ctrl.updateFilteredList();
            },
            function ( )
            {
                toastr.error( "Oops, there was an issue retrieving list", "Error" );
            });
        };

        ctrl.updateFilteredList = function()
        {
            ctrl.filteredList = $filter( "filter" )( ctrl.list, ctrl.query );
        };

        ctrl.openEditForm = function ( item )
        {
            $scope.item = angular.copy( item );

            ngDialog.open(
                {
                    template: "modules/list/templates/list-view-detail.html",
                    className: "ngdialog-theme-default item-form",
                    scope: $scope
                }
            );
        };

        ctrl.updateItem = function ( item )
        {
            User.update( item )
            .then( function ( response )
            {
                var updatedItem = response.data;
                ctrl.list.splice( getIndexById( item.id ), 1, updatedItem );
            },
            function ( )
            {
                toastr.error( "Oops, there was a problem updating the item", "Error" );
            });
        };

        ctrl.addNewItem = function ( item )
        {
            User.create( item )
            .then( function ( response )
            {
                ctrl.list.push( response.data );
            },
            function ( )
            {
                toastr.error( "Oops, there was an issue creating the item", "Error" );
            });
        };

        ctrl.addNewItemForm = function ()
        {
            ngDialog.open(
                {
                    template: "modules/list/templates/new-list-item.html",
                    className: "ngdialog-theme-default item-form",
                    scope: $scope
                }
            );
        };

        ctrl.openDeleteModal = function ( item )
        {
            $scope.item = item;

            ngDialog.open(
                {
                    template: "modules/list/templates/confirm-delete.html",
                    scope: $scope
                }
            );
        };

        ctrl.deleteItem = function ( item )
        {
            User.delete( item )
            .then( function ()
            {
                ctrl.list.splice( getIndexById( item.id ), 1 );
            },
            function ( )
            {
                toastr.error( "Oops, There was an issue deleting the item", "Error" );
            });
        };

        // Run on Load
        ctrl.getList();
    }

] );
