System.register(['angular2/testing', './test-pipe'], function(exports_1) {
    var testing_1, test_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (test_pipe_1_1) {
                test_pipe_1 = test_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('TestPipe Pipe', function () {
                testing_1.beforeEachProviders(function () { return [test_pipe_1.TestPipe]; });
                testing_1.it('should transform the input', testing_1.inject([test_pipe_1.TestPipe], function (pipe) {
                    testing_1.expect(pipe.transform(true)).toBe(null);
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/pipes/test-pipe/test-pipe.spec.js.map