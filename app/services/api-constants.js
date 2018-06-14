(function() {
    var apiConstants = {
        URL_PROTOCOL: 'http://',
        URL_DOMAIN: 'www.omdbapi.com/',
        API_KEY: '?apikey=56289319'
    };

    angular.module('appModule').constant('apiConstants', apiConstants);
})();