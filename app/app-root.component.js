(function() {
    var appRootComponent = {
        templateUrl: './app/app-root.component.html',
        controllerAs: '$ctrl',
        controller: appRootComponentCtrl,
        bindings: {},
        bindToController: true
    }

    appRootComponentCtrl.$inject = ['apiService'];
    function appRootComponentCtrl(apiService) {
        var vm = this;

        // methods
        vm.getMovieDetails = getMovieDetails;

        function getMovieDetails(movieName) {   
            vm.isMoviesSearched = true;         
            var urlParams = '&s=' + movieName;
            apiService.getMovieDetails(urlParams).then(function(res) {                                
                vm.resultMovies = res && res.data && res.data.Search;
            }, function(e) {
                alert('Something went wrong, Please try again after some time');
                console.log(e);
            });
        }
    }

    angular.module('appModule').component('appRoot', appRootComponent);
})();