angular.module('api.users', ['restangular'])

        .config(function($provide) {

            $provide.factory('Users', function($log, $rootScope, $q, Restangular) {
                 Restangular.setBaseUrl('http://jsonplaceholder.typicode.com/');
                
                var _methods = {
                    getUsers: function() {

                        var deferred = $q.defer();
                       
                        Restangular.all('users').getList().then(function(response) {
                            if (response) {
                                deferred.resolve(response);
                            }               
                        }, function(reason) {
                            deferred.reject(reason);
                        });
                        return deferred.promise;
                    }
                    
                };
                return _methods;
            });
        });