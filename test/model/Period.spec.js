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
    instance = new CoreApi.Period();
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

  describe('Period', function() {
    it('should create an instance of Period', function() {
      // uncomment below and update the code to test Period
      //var instane = new CoreApi.Period();
      //expect(instance).to.be.a(CoreApi.Period);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "dateFrom")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "dateTo")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property startBalance (base name: "startBalance")', function() {
      // uncomment below and update the code to test the property startBalance
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property managerStartBalance (base name: "managerStartBalance")', function() {
      // uncomment below and update the code to test the property managerStartBalance
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property managerStartShare (base name: "managerStartShare")', function() {
      // uncomment below and update the code to test the property managerStartShare
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property processStatus (base name: "processStatus")', function() {
      // uncomment below and update the code to test the property processStatus
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

    it('should have the property investmentRequest (base name: "investmentRequest")', function() {
      // uncomment below and update the code to test the property investmentRequest
      //var instane = new CoreApi.Period();
      //expect(instance).to.be();
    });

  });

}));
