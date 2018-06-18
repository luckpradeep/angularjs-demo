(function() {
    spinnerLoaderService.$inject = ['Rx'];
    function spinnerLoaderService(Rx) {
        var RxSubject = new Rx.Subject();


        function showSpinner() {
            RxSubject.onNext(true);
        }

        function hideSpinner() {
            RxSubject.onNext(false);
        }

        return {
            showSpinner: showSpinner,
            hideSpinner: hideSpinner,
            RxSubject: RxSubject
        }
    }

    angular.module('appModule').factory('spinnerLoaderService', spinnerLoaderService);
})();