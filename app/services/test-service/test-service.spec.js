System.register(['angular2/testing', './test-service'], function(exports_1) {
    var testing_1, test_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            testing_1.describe('TestService Service', function () {
                testing_1.beforeEachProviders(function () { return [test_service_1.TestService]; });
                testing_1.it('should ...', testing_1.inject([test_service_1.TestService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/services/test-service/test-service.spec.js.map