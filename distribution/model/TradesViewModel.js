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

var _OrderModel = require('./OrderModel');

var _OrderModel2 = _interopRequireDefault(_OrderModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The TradesViewModel model module.
* @module model/TradesViewModel
* @version v1
*/
var TradesViewModel = function () {
    /**
    * Constructs a new <code>TradesViewModel</code>.
    * @alias module:model/TradesViewModel
    * @class
    */

    function TradesViewModel() {
        _classCallCheck(this, TradesViewModel);

        this.trades = undefined;
        this.total = undefined;
        this.tradeServerType = undefined;
    }

    /**
    * Constructs a <code>TradesViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TradesViewModel} obj Optional instance to populate.
    * @return {module:model/TradesViewModel} The populated <code>TradesViewModel</code> instance.
    */


    _createClass(TradesViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new TradesViewModel();

                if (data.hasOwnProperty('trades')) {
                    obj['trades'] = _ApiClient2.default.convertToType(data['trades'], [_OrderModel2.default]);
                }
                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('tradeServerType')) {
                    obj['tradeServerType'] = _ApiClient2.default.convertToType(data['tradeServerType'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/OrderModel>} trades
        */

        /**
        * @member {Number} total
        */

        /**
        * @member {module:model/TradesViewModel.TradeServerTypeEnum} tradeServerType
        */


        /**
        * Allowed values for the <code>tradeServerType</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return TradesViewModel;
}();

TradesViewModel.TradeServerTypeEnum = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "MetaTrader4"
     * @const
     */
    "MetaTrader4": "MetaTrader4",

    /**
     * value: "MetaTrader5"
     * @const
     */
    "MetaTrader5": "MetaTrader5",

    /**
     * value: "NinjaTrader"
     * @const
     */
    "NinjaTrader": "NinjaTrader",

    /**
     * value: "cTrader"
     * @const
     */
    "cTrader": "cTrader",

    /**
     * value: "Rumus"
     * @const
     */
    "Rumus": "Rumus",

    /**
     * value: "Metastock"
     * @const
     */
    "Metastock": "Metastock"
};
exports.default = TradesViewModel;