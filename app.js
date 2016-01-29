System.register(['angular2/platform/browser', './app/angular2cli'], function(exports_1) {
    var browser_1, angular2cli_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (angular2cli_1_1) {
                angular2cli_1 = angular2cli_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(angular2cli_1.Angular2cliApp);
        }
    }
});
//# sourceMappingURL=../../app.js.map