(function() {
    var moviesListComponent = {
        templateUrl: './app/movies-list/movies-list.component.html',
        controllerAs: '$ctrl',
        controller: moviesListComponentCtrl,
        bindings: {
            movies: '<',
            moviesSearched: '<'
        },
        bindToController: true
    };

    moviesListComponentCtrl.$inject = [];
    function moviesListComponentCtrl() {
        var vm = this;        
    }

    angular.module('appModule').component('moviesList', moviesListComponent);
})();