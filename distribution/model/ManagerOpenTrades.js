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

var _OpenOrderModel = require('./OpenOrderModel');

var _OpenOrderModel2 = _interopRequireDefault(_OpenOrderModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ManagerOpenTrades model module.
* @module model/ManagerOpenTrades
* @version v1
*/
var ManagerOpenTrades = function () {
    /**
    * Constructs a new <code>ManagerOpenTrades</code>.
    * @alias module:model/ManagerOpenTrades
    * @class
    * @param managerAccountId {String} 
    * @param trades {Array.<module:model/OpenOrderModel>} 
    */

    function ManagerOpenTrades(managerAccountId, trades) {
        _classCallCheck(this, ManagerOpenTrades);

        this.managerAccountId = undefined;
        this.trades = undefined;


        this['managerAccountId'] = managerAccountId;this['trades'] = trades;
    }

    /**
    * Constructs a <code>ManagerOpenTrades</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerOpenTrades} obj Optional instance to populate.
    * @return {module:model/ManagerOpenTrades} The populated <code>ManagerOpenTrades</code> instance.
    */


    _createClass(ManagerOpenTrades, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerOpenTrades();

                if (data.hasOwnProperty('managerAccountId')) {
                    obj['managerAccountId'] = _ApiClient2.default.convertToType(data['managerAccountId'], 'String');
                }
                if (data.hasOwnProperty('trades')) {
                    obj['trades'] = _ApiClient2.default.convertToType(data['trades'], [_OpenOrderModel2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {String} managerAccountId
        */

        /**
        * @member {Array.<module:model/OpenOrderModel>} trades
        */

    }]);

    return ManagerOpenTrades;
}();

exports.default = ManagerOpenTrades;