(function() {
    var appModule = angular.module('appModule', ['ui.router']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['appModule']);
    });
})();