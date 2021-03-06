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
* The InvestmentProgramsFilter model module.
* @module model/InvestmentProgramsFilter
* @version v1
*/
var InvestmentProgramsFilter = function () {
    /**
    * Constructs a new <code>InvestmentProgramsFilter</code>.
    * @alias module:model/InvestmentProgramsFilter
    * @class
    */

    function InvestmentProgramsFilter() {
        _classCallCheck(this, InvestmentProgramsFilter);

        this.managerId = undefined;
        this.brokerId = undefined;
        this.brokerTradeServerId = undefined;
        this.investMaxAmountFrom = undefined;
        this.investMaxAmountTo = undefined;
        this.sorting = undefined;
        this.name = undefined;
        this.levelMin = undefined;
        this.levelMax = undefined;
        this.profitAvgMin = undefined;
        this.profitAvgMax = undefined;
        this.profitTotalMin = undefined;
        this.profitTotalMax = undefined;
        this.profitTotalPercentMin = undefined;
        this.profitTotalPercentMax = undefined;
        this.profitAvgPercentMin = undefined;
        this.profitAvgPercentMax = undefined;
        this.profitTotalChange = undefined;
        this.periodMin = undefined;
        this.periodMax = undefined;
        this.showActivePrograms = undefined;
        this.equityChartLength = undefined;
        this.showMyFavorites = undefined;
        this.skip = undefined;
        this.take = undefined;
    }

    /**
    * Constructs a <code>InvestmentProgramsFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramsFilter} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramsFilter} The populated <code>InvestmentProgramsFilter</code> instance.
    */


    _createClass(InvestmentProgramsFilter, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InvestmentProgramsFilter();

                if (data.hasOwnProperty('managerId')) {
                    obj['managerId'] = _ApiClient2.default.convertToType(data['managerId'], 'String');
                }
                if (data.hasOwnProperty('brokerId')) {
                    obj['brokerId'] = _ApiClient2.default.convertToType(data['brokerId'], 'String');
                }
                if (data.hasOwnProperty('brokerTradeServerId')) {
                    obj['brokerTradeServerId'] = _ApiClient2.default.convertToType(data['brokerTradeServerId'], 'String');
                }
                if (data.hasOwnProperty('investMaxAmountFrom')) {
                    obj['investMaxAmountFrom'] = _ApiClient2.default.convertToType(data['investMaxAmountFrom'], 'Number');
                }
                if (data.hasOwnProperty('investMaxAmountTo')) {
                    obj['investMaxAmountTo'] = _ApiClient2.default.convertToType(data['investMaxAmountTo'], 'Number');
                }
                if (data.hasOwnProperty('sorting')) {
                    obj['sorting'] = _ApiClient2.default.convertToType(data['sorting'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('levelMin')) {
                    obj['levelMin'] = _ApiClient2.default.convertToType(data['levelMin'], 'Number');
                }
                if (data.hasOwnProperty('levelMax')) {
                    obj['levelMax'] = _ApiClient2.default.convertToType(data['levelMax'], 'Number');
                }
                if (data.hasOwnProperty('profitAvgMin')) {
                    obj['profitAvgMin'] = _ApiClient2.default.convertToType(data['profitAvgMin'], 'Number');
                }
                if (data.hasOwnProperty('profitAvgMax')) {
                    obj['profitAvgMax'] = _ApiClient2.default.convertToType(data['profitAvgMax'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalMin')) {
                    obj['profitTotalMin'] = _ApiClient2.default.convertToType(data['profitTotalMin'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalMax')) {
                    obj['profitTotalMax'] = _ApiClient2.default.convertToType(data['profitTotalMax'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalPercentMin')) {
                    obj['profitTotalPercentMin'] = _ApiClient2.default.convertToType(data['profitTotalPercentMin'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalPercentMax')) {
                    obj['profitTotalPercentMax'] = _ApiClient2.default.convertToType(data['profitTotalPercentMax'], 'Number');
                }
                if (data.hasOwnProperty('profitAvgPercentMin')) {
                    obj['profitAvgPercentMin'] = _ApiClient2.default.convertToType(data['profitAvgPercentMin'], 'Number');
                }
                if (data.hasOwnProperty('profitAvgPercentMax')) {
                    obj['profitAvgPercentMax'] = _ApiClient2.default.convertToType(data['profitAvgPercentMax'], 'Number');
                }
                if (data.hasOwnProperty('profitTotalChange')) {
                    obj['profitTotalChange'] = _ApiClient2.default.convertToType(data['profitTotalChange'], 'String');
                }
                if (data.hasOwnProperty('periodMin')) {
                    obj['periodMin'] = _ApiClient2.default.convertToType(data['periodMin'], 'Number');
                }
                if (data.hasOwnProperty('periodMax')) {
                    obj['periodMax'] = _ApiClient2.default.convertToType(data['periodMax'], 'Number');
                }
                if (data.hasOwnProperty('showActivePrograms')) {
                    obj['showActivePrograms'] = _ApiClient2.default.convertToType(data['showActivePrograms'], 'Boolean');
                }
                if (data.hasOwnProperty('equityChartLength')) {
                    obj['equityChartLength'] = _ApiClient2.default.convertToType(data['equityChartLength'], 'Number');
                }
                if (data.hasOwnProperty('showMyFavorites')) {
                    obj['showMyFavorites'] = _ApiClient2.default.convertToType(data['showMyFavorites'], 'Boolean');
                }
                if (data.hasOwnProperty('skip')) {
                    obj['skip'] = _ApiClient2.default.convertToType(data['skip'], 'Number');
                }
                if (data.hasOwnProperty('take')) {
                    obj['take'] = _ApiClient2.default.convertToType(data['take'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} managerId
        */

        /**
        * @member {String} brokerId
        */

        /**
        * @member {String} brokerTradeServerId
        */

        /**
        * @member {Number} investMaxAmountFrom
        */

        /**
        * @member {Number} investMaxAmountTo
        */

        /**
        * @member {module:model/InvestmentProgramsFilter.SortingEnum} sorting
        */

        /**
        * @member {String} name
        */

        /**
        * @member {Number} levelMin
        */

        /**
        * @member {Number} levelMax
        */

        /**
        * @member {Number} profitAvgMin
        */

        /**
        * @member {Number} profitAvgMax
        */

        /**
        * @member {Number} profitTotalMin
        */

        /**
        * @member {Number} profitTotalMax
        */

        /**
        * @member {Number} profitTotalPercentMin
        */

        /**
        * @member {Number} profitTotalPercentMax
        */

        /**
        * @member {Number} profitAvgPercentMin
        */

        /**
        * @member {Number} profitAvgPercentMax
        */

        /**
        * @member {module:model/InvestmentProgramsFilter.ProfitTotalChangeEnum} profitTotalChange
        */

        /**
        * @member {Number} periodMin
        */

        /**
        * @member {Number} periodMax
        */

        /**
        * @member {Boolean} showActivePrograms
        */

        /**
        * @member {Number} equityChartLength
        */

        /**
        * @member {Boolean} showMyFavorites
        */

        /**
        * @member {Number} skip
        */

        /**
        * @member {Number} take
        */


        /**
        * Allowed values for the <code>sorting</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>profitTotalChange</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return InvestmentProgramsFilter;
}();

InvestmentProgramsFilter.SortingEnum = {

    /**
     * value: "ByLevelAsc"
     * @const
     */
    "ByLevelAsc": "ByLevelAsc",

    /**
     * value: "ByLevelDesc"
     * @const
     */
    "ByLevelDesc": "ByLevelDesc",

    /**
     * value: "ByProfitAsc"
     * @const
     */
    "ByProfitAsc": "ByProfitAsc",

    /**
     * value: "ByProfitDesc"
     * @const
     */
    "ByProfitDesc": "ByProfitDesc",

    /**
     * value: "ByOrdersAsc"
     * @const
     */
    "ByOrdersAsc": "ByOrdersAsc",

    /**
     * value: "ByOrdersDesc"
     * @const
     */
    "ByOrdersDesc": "ByOrdersDesc",

    /**
     * value: "ByEndOfPeriodAsc"
     * @const
     */
    "ByEndOfPeriodAsc": "ByEndOfPeriodAsc",

    /**
     * value: "ByEndOfPeriodDesc"
     * @const
     */
    "ByEndOfPeriodDesc": "ByEndOfPeriodDesc",

    /**
     * value: "ByTitleAsc"
     * @const
     */
    "ByTitleAsc": "ByTitleAsc",

    /**
     * value: "ByTitleDesc"
     * @const
     */
    "ByTitleDesc": "ByTitleDesc"
};
InvestmentProgramsFilter.ProfitTotalChangeEnum = {

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
exports.default = InvestmentProgramsFilter;