(function() {
    angular.module('appModule').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/{search}',
                template: '<movies-list search="$resolve.search"></movies-list>',
                resolve: {
                    search: ['$transition$', function($transition$) {
                        return $transition$.params().search;
                    }]
                }
            })
            .state('details', {
                url: '/details/{movieId}',                
                template: '<movie-details movie-id="$resolve.movieId"></movie-details>',
                resolve: {
                    movieId: ['$transition$', function($transition$) {
                        return $transition$.params().movieId;
                    }]
                }
            });
    }]);
})();