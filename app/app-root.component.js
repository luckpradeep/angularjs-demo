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
        vm.goHome = goHome;

        function getMovieDetails(movieName) {    
            $state.go('home', {search: movieName});  
        }

        function goHome() {
            $state.go('home', {search: ''});  
        }
    }

    angular.module('appModule').component('appRoot', appRootComponent);
})();