System.register(['angular2/testing', '../app/angular2cli'], function(exports_1) {
    var testing_1, angular2cli_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (angular2cli_1_1) {
                angular2cli_1 = angular2cli_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [angular2cli_1.Angular2cliApp]; });
            testing_1.describe('App: Angular2cli', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([angular2cli_1.Angular2cliApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([angular2cli_1.Angular2cliApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/angular2cli.spec.js.map