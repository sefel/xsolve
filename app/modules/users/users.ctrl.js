angular.module('modules.users', ['directives.datatable', 'api.users'])
        .config(['$stateProvider',
            function($stateProvider) {
                $stateProvider

                        .state('users', {
                            url: '/uzytkownicy',
                            controller: 'UsersCtrl',
                            templateUrl: 'app/modules/users/users.tpl.html', 
                            resolve: {
                                Users: function(Users) {
                                    return Users.getUsers().then(function(users) {
                                        return (users);
                                    }).catch(function(err) {
                                        console.log(err);
                                        console.log(err.status);
                                    });
                                }
                            }

                        });


            }]).controller('UsersCtrl', function($scope, Users) {
                $scope.table = Users;
});