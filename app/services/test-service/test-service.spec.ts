import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {TestService} from './test-service';


describe('TestService Service', () => {

  beforeEachProviders(() => [TestService]);


  it('should ...', inject([TestService], (service:TestService) => {

  }));

});
