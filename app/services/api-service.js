(function() {
    apiService.$inject = ['$http', 'apiConstants'];
    function apiService($http, apiConstants) {
        function getMovieDetails(urlParams) {
            var url = apiConstants.URL_PROTOCOL + apiConstants.URL_DOMAIN + apiConstants.API_KEY + urlParams
            return $http.get(url);
        }
        return {
            getMovieDetails: getMovieDetails
        }
    }

    angular.module('appModule').factory('apiService', apiService);
})();