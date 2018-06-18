(function() {
    var moviesListComponent = {
        templateUrl: './app/movies-list/movies-list.component.html',
        controllerAs: '$ctrl',
        controller: moviesListComponentCtrl,
        bindings: {
            movies: '<',
            search: '<'
        },
        bindToController: true
    };

    moviesListComponentCtrl.$inject = ['$state', 'apiService', '$timeout', 'spinnerLoaderService'];
    function moviesListComponentCtrl($state, apiService, $interval, spinnerLoaderService) {
        var vm = this;        

        // methods
        vm.getFullDetails = getFullDetails;
        vm.$onInit = $onInit;

        function $onInit() {            
            getMovieDetails(vm.search);
        }

        function getMovieDetails(movieName) {  
            spinnerLoaderService.showSpinner();
            var urlParams = '&s=' + movieName;         
            apiService.getMovieDetails(urlParams).then(function(res) {                                
                spinnerLoaderService.hideSpinner();
                vm.movies = res && res.data && res.data.Search;
            }, function(e) {
                spinnerLoaderService.hideSpinner();
                alert('Something went wrong, Please try again after some time');
                console.log(e);
            });
        }

        function getFullDetails(imdbID) {
            var urlParams = '&i=' + imdbID;  
            apiService.getMovieDetails(urlParams).then(function(res) {                                
                vm.resultMovies = res && res.data;
                $state.go('details', {'data': vm.resultMovies, 'movieId': imdbID});
            }, function(e) {
                alert('Something went wrong, Please try again after some time');
                console.log(e);
            });
        }
    }

    angular.module('appModule').component('moviesList', moviesListComponent);
})();