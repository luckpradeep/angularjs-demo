(function() {
    var spinnerLoaderComponent = {
        templateUrl: './app/util-components/spinner-loader/spinner-loader.component.html',
        controllerAs: '$ctrl',
        controller: spinnerLoaderComponentCtrl,
        bindings: {},
        bindToController: true
    };

    spinnerLoaderComponentCtrl.$inject = ['spinnerLoaderService'];
    function spinnerLoaderComponentCtrl(spinnerLoaderService) {
        var vm = this;        

        spinnerLoaderService.RxSubject.subscribe(function(status) {
            vm.canShowSpinner = status;
        });
    }

    angular.module('appModule').component('spinnerLoader', spinnerLoaderComponent);
})();
