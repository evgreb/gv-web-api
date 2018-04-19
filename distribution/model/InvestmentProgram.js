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

var _Chart = require('./Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _ChartByDate = require('./ChartByDate');

var _ChartByDate2 = _interopRequireDefault(_ChartByDate);

var _FreeTokens = require('./FreeTokens');

var _FreeTokens2 = _interopRequireDefault(_FreeTokens);

var _ProfilePublicViewModel = require('./ProfilePublicViewModel');

var _ProfilePublicViewModel2 = _interopRequireDefault(_ProfilePublicViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The InvestmentProgram model module.
* @module model/InvestmentProgram
* @version v1
*/
var InvestmentProgram = function () {
    /**
    * Constructs a new <code>InvestmentProgram</code>.
    * @alias module:model/InvestmentProgram
    * @class
    */

    function InvestmentProgram() {
        _classCallCheck(this, InvestmentProgram);

        this.id = undefined;
        this.title = undefined;
        this.description = undefined;
        this.level = undefined;
        this.logo = undefined;
        this.isEnabled = undefined;
        this.balance = undefined;
        this.currency = undefined;
        this.tradesCount = undefined;
        this.investorsCount = undefined;
        this.periodDuration = undefined;
        this.startOfPeriod = undefined;
        this.endOfPeriod = undefined;
        this.profitAvg = undefined;
        this.profitTotal = undefined;
        this.profitAvgPercent = undefined;
        this.profitTotalPercent = undefined;
        this.profitTotalChange = undefined;
        this.availableInvestment = undefined;
        this.feeSuccess = undefined;
        this.feeManagement = undefined;
        this.chart = undefined;
        this.equityChart = undefined;
        this.manager = undefined;
        this.freeTokens = undefined;
        this.hasNewRequests = undefined;
        this.isInvestEnable = undefined;
        this.isOwnProgram = undefined;
        this.canCloseProgram = undefined;
        this.isFavorite = undefined;
    }

    /**
    * Constructs a <code>InvestmentProgram</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgram} obj Optional instance to populate.
    * @return {module:model/InvestmentProgram} The populated <code>InvestmentProgram</code> instance.
    */


    _createClass(InvestmentProgram, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InvestmentProgram();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('isEnabled')) {
                    obj['isEnabled'] = _ApiClient2.default.convertToType(data['isEnabled'], 'Boolean');
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('tradesCount')) {
                    obj['tradesCount'] = _ApiClient2.default.convertToType(data['tradesCount'], 'Number');
                }
                if (data.hasOwnProperty('investorsCount')) {
                    obj['investorsCount'] = _ApiClient2.default.convertToType(data['investorsCount'], 'Number');
                }
                if (data.hasOwnProperty('periodDuration')) {
                    obj['periodDuration'] = _ApiClient2.default.convertToType(data['periodDuration'], 'Number');
                }
                if (data.hasOwnProperty('startOfPeriod')) {
                    obj['startOfPeriod'] = _ApiClient2.default.convertToType(data['startOfPeriod'], 'Date');
                }
                if (data.hasOwnProperty('endOfPeriod')) {
                    obj['endOfPeriod'] = _ApiClient2.default.convertToType(data['endOfPeriod'], 'Date');
                }
                if (data.hasOwnProperty('profitAvg')) {
                    obj['profitAvg'] = _ApiClient2.default.convertToType(data['profitAvg'], 'Number');
                }
                if (data.hasOwnProperty('profitTotal')) {
                    obj['profitTotal'] = _ApiClient2.default.convertToType(data['profitTotal'], 'Number');
                }
                if (data.hasOwnProperty('profitAvgPercent')) {
                    obj['profitAvgPercent'] = _ApiClient2.default.convertToType(data['profitAvgPercent'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalPercent')) {
                    obj['profitTotalPercent'] = _ApiClient2.default.convertToType(data['profitTotalPercent'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalChange')) {
                    obj['profitTotalChange'] = _ApiClient2.default.convertToType(data['profitTotalChange'], 'String');
                }
                if (data.hasOwnProperty('availableInvestment')) {
                    obj['availableInvestment'] = _ApiClient2.default.convertToType(data['availableInvestment'], 'Number');
                }
                if (data.hasOwnProperty('feeSuccess')) {
                    obj['feeSuccess'] = _ApiClient2.default.convertToType(data['feeSuccess'], 'Number');
                }
                if (data.hasOwnProperty('feeManagement')) {
                    obj['feeManagement'] = _ApiClient2.default.convertToType(data['feeManagement'], 'Number');
                }
                if (data.hasOwnProperty('chart')) {
                    obj['chart'] = _ApiClient2.default.convertToType(data['chart'], [_Chart2.default]);
                }
                if (data.hasOwnProperty('equityChart')) {
                    obj['equityChart'] = _ApiClient2.default.convertToType(data['equityChart'], [_ChartByDate2.default]);
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublicViewModel2.default.constructFromObject(data['manager']);
                }
                if (data.hasOwnProperty('freeTokens')) {
                    obj['freeTokens'] = _FreeTokens2.default.constructFromObject(data['freeTokens']);
                }
                if (data.hasOwnProperty('hasNewRequests')) {
                    obj['hasNewRequests'] = _ApiClient2.default.convertToType(data['hasNewRequests'], 'Boolean');
                }
                if (data.hasOwnProperty('isInvestEnable')) {
                    obj['isInvestEnable'] = _ApiClient2.default.convertToType(data['isInvestEnable'], 'Boolean');
                }
                if (data.hasOwnProperty('isOwnProgram')) {
                    obj['isOwnProgram'] = _ApiClient2.default.convertToType(data['isOwnProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('canCloseProgram')) {
                    obj['canCloseProgram'] = _ApiClient2.default.convertToType(data['canCloseProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('isFavorite')) {
                    obj['isFavorite'] = _ApiClient2.default.convertToType(data['isFavorite'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} title
        */

        /**
        * @member {String} description
        */

        /**
        * @member {Number} level
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {Boolean} isEnabled
        */

        /**
        * @member {Number} balance
        */

        /**
        * @member {module:model/InvestmentProgram.CurrencyEnum} currency
        */

        /**
        * @member {Number} tradesCount
        */

        /**
        * @member {Number} investorsCount
        */

        /**
        * @member {Number} periodDuration
        */

        /**
        * @member {Date} startOfPeriod
        */

        /**
        * @member {Date} endOfPeriod
        */

        /**
        * @member {Number} profitAvg
        */

        /**
        * @member {Number} profitTotal
        */

        /**
        * @member {Number} profitAvgPercent
        */

        /**
        * @member {Number} profitTotalPercent
        */

        /**
        * @member {module:model/InvestmentProgram.ProfitTotalChangeEnum} profitTotalChange
        */

        /**
        * @member {Number} availableInvestment
        */

        /**
        * @member {Number} feeSuccess
        */

        /**
        * @member {Number} feeManagement
        */

        /**
        * @member {Array.<module:model/Chart>} chart
        */

        /**
        * @member {Array.<module:model/ChartByDate>} equityChart
        */

        /**
        * @member {module:model/ProfilePublicViewModel} manager
        */

        /**
        * @member {module:model/FreeTokens} freeTokens
        */

        /**
        * @member {Boolean} hasNewRequests
        */

        /**
        * @member {Boolean} isInvestEnable
        */

        /**
        * @member {Boolean} isOwnProgram
        */

        /**
        * @member {Boolean} canCloseProgram
        */

        /**
        * @member {Boolean} isFavorite
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>profitTotalChange</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return InvestmentProgram;
}();

InvestmentProgram.CurrencyEnum = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",

    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",

    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"
};
InvestmentProgram.ProfitTotalChangeEnum = {

    /**
     * value: "Unchanged"
     * @const
     */
    "Unchanged": "Unchanged",

    /**
     * value: "Up"
     * @const
     */
    "Up": "Up",

    /**
     * value: "Down"
     * @const
     */
    "Down": "Down"
};
exports.default = InvestmentProgram;