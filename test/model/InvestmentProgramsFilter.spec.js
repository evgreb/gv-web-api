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
    instance = new CoreApi.InvestmentProgramsFilter();
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

  describe('InvestmentProgramsFilter', function() {
    it('should create an instance of InvestmentProgramsFilter', function() {
      // uncomment below and update the code to test InvestmentProgramsFilter
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be.a(CoreApi.InvestmentProgramsFilter);
    });

    it('should have the property managerId (base name: "managerId")', function() {
      // uncomment below and update the code to test the property managerId
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property brokerId (base name: "brokerId")', function() {
      // uncomment below and update the code to test the property brokerId
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property brokerTradeServerId (base name: "brokerTradeServerId")', function() {
      // uncomment below and update the code to test the property brokerTradeServerId
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property investMaxAmountFrom (base name: "investMaxAmountFrom")', function() {
      // uncomment below and update the code to test the property investMaxAmountFrom
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property investMaxAmountTo (base name: "investMaxAmountTo")', function() {
      // uncomment below and update the code to test the property investMaxAmountTo
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property sorting (base name: "sorting")', function() {
      // uncomment below and update the code to test the property sorting
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property levelMin (base name: "levelMin")', function() {
      // uncomment below and update the code to test the property levelMin
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property levelMax (base name: "levelMax")', function() {
      // uncomment below and update the code to test the property levelMax
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitAvgMin (base name: "profitAvgMin")', function() {
      // uncomment below and update the code to test the property profitAvgMin
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitAvgMax (base name: "profitAvgMax")', function() {
      // uncomment below and update the code to test the property profitAvgMax
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitTotalMin (base name: "profitTotalMin")', function() {
      // uncomment below and update the code to test the property profitTotalMin
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitTotalMax (base name: "profitTotalMax")', function() {
      // uncomment below and update the code to test the property profitTotalMax
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitTotalPercentMin (base name: "profitTotalPercentMin")', function() {
      // uncomment below and update the code to test the property profitTotalPercentMin
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitTotalPercentMax (base name: "profitTotalPercentMax")', function() {
      // uncomment below and update the code to test the property profitTotalPercentMax
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitAvgPercentMin (base name: "profitAvgPercentMin")', function() {
      // uncomment below and update the code to test the property profitAvgPercentMin
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitAvgPercentMax (base name: "profitAvgPercentMax")', function() {
      // uncomment below and update the code to test the property profitAvgPercentMax
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property profitTotalChange (base name: "profitTotalChange")', function() {
      // uncomment below and update the code to test the property profitTotalChange
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property periodMin (base name: "periodMin")', function() {
      // uncomment below and update the code to test the property periodMin
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property periodMax (base name: "periodMax")', function() {
      // uncomment below and update the code to test the property periodMax
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property showActivePrograms (base name: "showActivePrograms")', function() {
      // uncomment below and update the code to test the property showActivePrograms
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property equityChartLength (base name: "equityChartLength")', function() {
      // uncomment below and update the code to test the property equityChartLength
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property showMyFavorites (base name: "showMyFavorites")', function() {
      // uncomment below and update the code to test the property showMyFavorites
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

    it('should have the property take (base name: "take")', function() {
      // uncomment below and update the code to test the property take
      //var instane = new CoreApi.InvestmentProgramsFilter();
      //expect(instance).to.be();
    });

  });

}));
