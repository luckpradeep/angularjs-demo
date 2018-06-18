(function() {
    var movieDetailsComponent = {
        templateUrl: './app/movie-details/movie-details.component.html',
        controllerAs: '$ctrl',
        controller: movieDetailsComponentCtrl,
        bindings: {
            movieId: '<'
        },
        bindToController: true
    };

    movieDetailsComponentCtrl.$inject = ['apiService', 'spinnerLoaderService'];
    function movieDetailsComponentCtrl(apiService, spinnerLoaderService) {
        var vm = this;   
        
        // methods
        vm.$onInit = $onInit;

        function $onInit() {
            getFullDetails(vm.movieId);
        }

        function getFullDetails(imdbID) {
            var urlParams = '&i=' + imdbID;  
            spinnerLoaderService.showSpinner();
            apiService.getMovieDetails(urlParams).then(function(res) {  
                spinnerLoaderService.hideSpinner();                              
                vm.data = res && res.data;
            }, function(e) {
                spinnerLoaderService.hideSpinner();
                alert('Something went wrong, Please try again after some time');
                console.log(e);
            });
        }
    }

    angular.module('appModule').component('movieDetails', movieDetailsComponent);
})();