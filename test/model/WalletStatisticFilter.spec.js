/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoreApi);
  }
}(this, function(expect, CoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoreApi.WalletStatisticFilter();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WalletStatisticFilter', function() {
    it('should create an instance of WalletStatisticFilter', function() {
      // uncomment below and update the code to test WalletStatisticFilter
      //var instane = new CoreApi.WalletStatisticFilter();
      //expect(instance).to.be.a(CoreApi.WalletStatisticFilter);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CoreApi.WalletStatisticFilter();
      //expect(instance).to.be();
    });

    it('should have the property isFull (base name: "isFull")', function() {
      // uncomment below and update the code to test the property isFull
      //var instane = new CoreApi.WalletStatisticFilter();
      //expect(instance).to.be();
    });

  });

}));
