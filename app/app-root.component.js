(function() {
    var appRootComponent = {
        templateUrl: './app/app-root.component.html',
        controllerAs: '$ctrl',
        controller: appRootComponentCtrl,
        bindings: {},
        bindToController: true
    }

    appRootComponentCtrl.$inject = ['apiService', '$state'];
    function appRootComponentCtrl(apiService, $state) {
        var vm = this;

        // methods
        vm.getMovieDetails = getMovieDetails;

        function getMovieDetails(movieName) {    
            $state.go('home', {search: movieName});  
        }
    }

    angular.module('appModule').component('appRoot', appRootComponent);
})();