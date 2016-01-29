import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2cliApp} from '../app/angular2cli';

beforeEachProviders(() => [Angular2cliApp]);

describe('App: Angular2cli', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2cliApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2cliApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

