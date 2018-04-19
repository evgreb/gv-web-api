'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Chart model module.
* @module model/Chart
* @version v1
*/
var Chart = function () {
    /**
    * Constructs a new <code>Chart</code>.
    * @alias module:model/Chart
    * @class
    */

    function Chart() {
        _classCallCheck(this, Chart);

        this.date = undefined;
        this.managerFund = undefined;
        this.investorFund = undefined;
        this.profit = undefined;
        this.loss = undefined;
        this.totalProfit = undefined;
    }

    /**
    * Constructs a <code>Chart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Chart} obj Optional instance to populate.
    * @return {module:model/Chart} The populated <code>Chart</code> instance.
    */


    _createClass(Chart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Chart();

                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('managerFund')) {
                    obj['managerFund'] = _ApiClient2.default.convertToType(data['managerFund'], 'Number');
                }
                if (data.hasOwnProperty('investorFund')) {
                    obj['investorFund'] = _ApiClient2.default.convertToType(data['investorFund'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('loss')) {
                    obj['loss'] = _ApiClient2.default.convertToType(data['loss'], 'Number');
                }
                if (data.hasOwnProperty('totalProfit')) {
                    obj['totalProfit'] = _ApiClient2.default.convertToType(data['totalProfit'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Date} date
        */

        /**
        * @member {Number} managerFund
        */

        /**
        * @member {Number} investorFund
        */

        /**
        * @member {Number} profit
        */

        /**
        * @member {Number} loss
        */

        /**
        * @member {Number} totalProfit
        */

    }]);

    return Chart;
}();

exports.default = Chart;