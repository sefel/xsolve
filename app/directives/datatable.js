angular.module('directives.datatable', [])
        .directive('datatable', function() {
            return {
                restrict: 'E',
                replace: false,
                scope: {
                    taborigin: '='
                },
                templateUrl: 'app/directives/table.tpl.html',
                controller: function($scope) {
                    
                    (localStorage.onsite)? $scope.onsite = localStorage.onsite : $scope.onsite = '5';
                    $scope.currentPage = 0;
                    $scope.range = function(start, end) {
                        var ret = [];
                        if (!end) {
                            end = start;
                            start = 0;
                        }
                        for (var i = start; i < end; i++) {
                            ret.push(i);
                        }
                        return ret;
                    };
                    $scope.setPage = function(n) {
                        $scope.currentPage = n;
                    };
                    $scope.$watch('onsite', function() {
                        var arr = angular.copy($scope.taborigin);
                        var res = [];
                        while (arr.length) {
                            res.push(arr.splice(0, $scope.onsite ));
                        }
                        localStorage.onsite = $scope.onsite;
                       $scope.tab = res;
                       $scope.currentPage = 0;
                    }, true);
                }
            };
        });






