(function() {
    var appModule = angular.module('appModule', []);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['appModule']);
    });
})();