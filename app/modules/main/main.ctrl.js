angular.module('modules.main', [])
        .config(['$stateProvider',
            function($stateProvider) {
                $stateProvider

                        .state('main', {
                            url: '/strona-glowna',
                            templateUrl: 'app/modules/main/main.tpl.html', 
                        });
            }]);