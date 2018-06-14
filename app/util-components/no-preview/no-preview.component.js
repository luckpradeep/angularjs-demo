(function() {
    var noPreviewComponent = {
        templateUrl: './app/util-components/no-preview/no-preview.component.html',
        bindings: {},
        bindToController: true
    }

    angular.module('appModule').component('noPreview', noPreviewComponent);
})();