angular.module('api.post', ['restangular'])

        .config(function($provide) {

            $provide.factory('Post', function($log, $rootScope, $q, Restangular) {
                Restangular.setBaseUrl('http://jsonplaceholder.typicode.com/');
                var _methods = {
                    getPost: function() {

                        var deferred = $q.defer();
                       var data = {
                           id: 1
                       };
                        Restangular.one('posts', 1).get().then(function(response) {
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