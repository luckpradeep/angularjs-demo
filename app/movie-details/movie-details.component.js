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

    movieDetailsComponentCtrl.$inject = ['apiService'];
    function movieDetailsComponentCtrl(apiService) {
        var vm = this;   
        
        // methods
        vm.$onInit = $onInit;

        function $onInit() {
            getFullDetails(vm.movieId);
        }

        function getFullDetails(imdbID) {
            var urlParams = '&i=' + imdbID;  
            apiService.getMovieDetails(urlParams).then(function(res) {                                
                vm.data = res && res.data;
            }, function(e) {
                alert('Something went wrong, Please try again after some time');
                console.log(e);
            });
        }
    }

    angular.module('appModule').component('movieDetails', movieDetailsComponent);
})();