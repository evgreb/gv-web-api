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
* The InvestorAmount model module.
* @module model/InvestorAmount
* @version v1
*/
var InvestorAmount = function () {
    /**
    * Constructs a new <code>InvestorAmount</code>.
    * @alias module:model/InvestorAmount
    * @class
    */

    function InvestorAmount() {
        _classCallCheck(this, InvestorAmount);

        this.investorId = undefined;
        this.amount = undefined;
    }

    /**
    * Constructs a <code>InvestorAmount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestorAmount} obj Optional instance to populate.
    * @return {module:model/InvestorAmount} The populated <code>InvestorAmount</code> instance.
    */


    _createClass(InvestorAmount, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InvestorAmount();

                if (data.hasOwnProperty('investorId')) {
                    obj['investorId'] = _ApiClient2.default.convertToType(data['investorId'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} investorId
        */

        /**
        * @member {Number} amount
        */

    }]);

    return InvestorAmount;
}();

exports.default = InvestorAmount;