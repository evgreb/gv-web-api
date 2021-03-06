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

var _WalletInvestmentProgram = require('./WalletInvestmentProgram');

var _WalletInvestmentProgram2 = _interopRequireDefault(_WalletInvestmentProgram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WalletInvestmentPrograms model module.
* @module model/WalletInvestmentPrograms
* @version v1
*/
var WalletInvestmentPrograms = function () {
    /**
    * Constructs a new <code>WalletInvestmentPrograms</code>.
    * @alias module:model/WalletInvestmentPrograms
    * @class
    */

    function WalletInvestmentPrograms() {
        _classCallCheck(this, WalletInvestmentPrograms);

        this.investmentPrograms = undefined;
    }

    /**
    * Constructs a <code>WalletInvestmentPrograms</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletInvestmentPrograms} obj Optional instance to populate.
    * @return {module:model/WalletInvestmentPrograms} The populated <code>WalletInvestmentPrograms</code> instance.
    */


    _createClass(WalletInvestmentPrograms, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WalletInvestmentPrograms();

                if (data.hasOwnProperty('investmentPrograms')) {
                    obj['investmentPrograms'] = _ApiClient2.default.convertToType(data['investmentPrograms'], [_WalletInvestmentProgram2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/WalletInvestmentProgram>} investmentPrograms
        */

    }]);

    return WalletInvestmentPrograms;
}();

exports.default = WalletInvestmentPrograms;