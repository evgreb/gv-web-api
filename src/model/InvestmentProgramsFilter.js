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


import ApiClient from '../ApiClient';





/**
* The InvestmentProgramsFilter model module.
* @module model/InvestmentProgramsFilter
* @version v1
*/
export default class InvestmentProgramsFilter {
    /**
    * Constructs a new <code>InvestmentProgramsFilter</code>.
    * @alias module:model/InvestmentProgramsFilter
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgramsFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramsFilter} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramsFilter} The populated <code>InvestmentProgramsFilter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgramsFilter();

            
            
            

            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'String');
            }
            if (data.hasOwnProperty('brokerId')) {
                obj['brokerId'] = ApiClient.convertToType(data['brokerId'], 'String');
            }
            if (data.hasOwnProperty('brokerTradeServerId')) {
                obj['brokerTradeServerId'] = ApiClient.convertToType(data['brokerTradeServerId'], 'String');
            }
            if (data.hasOwnProperty('investMaxAmountFrom')) {
                obj['investMaxAmountFrom'] = ApiClient.convertToType(data['investMaxAmountFrom'], 'Number');
            }
            if (data.hasOwnProperty('investMaxAmountTo')) {
                obj['investMaxAmountTo'] = ApiClient.convertToType(data['investMaxAmountTo'], 'Number');
            }
            if (data.hasOwnProperty('sorting')) {
                obj['sorting'] = ApiClient.convertToType(data['sorting'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('levelMin')) {
                obj['levelMin'] = ApiClient.convertToType(data['levelMin'], 'Number');
            }
            if (data.hasOwnProperty('levelMax')) {
                obj['levelMax'] = ApiClient.convertToType(data['levelMax'], 'Number');
            }
            if (data.hasOwnProperty('profitAvgMin')) {
                obj['profitAvgMin'] = ApiClient.convertToType(data['profitAvgMin'], 'Number');
            }
            if (data.hasOwnProperty('profitAvgMax')) {
                obj['profitAvgMax'] = ApiClient.convertToType(data['profitAvgMax'], 'Number');
            }
            if (data.hasOwnProperty('profitTotalMin')) {
                obj['profitTotalMin'] = ApiClient.convertToType(data['profitTotalMin'], 'Number');
            }
            if (data.hasOwnProperty('profitTotalMax')) {
                obj['profitTotalMax'] = ApiClient.convertToType(data['profitTotalMax'], 'Number');
            }
            if (data.hasOwnProperty('profitTotalPercentMin')) {
                obj['profitTotalPercentMin'] = ApiClient.convertToType(data['profitTotalPercentMin'], 'Number');
            }
            if (data.hasOwnProperty('profitTotalPercentMax')) {
                obj['profitTotalPercentMax'] = ApiClient.convertToType(data['profitTotalPercentMax'], 'Number');
            }
            if (data.hasOwnProperty('profitAvgPercentMin')) {
                obj['profitAvgPercentMin'] = ApiClient.convertToType(data['profitAvgPercentMin'], 'Number');
            }
            if (data.hasOwnProperty('profitAvgPercentMax')) {
                obj['profitAvgPercentMax'] = ApiClient.convertToType(data['profitAvgPercentMax'], 'Number');
            }
            if (data.hasOwnProperty('profitTotalChange')) {
                obj['profitTotalChange'] = ApiClient.convertToType(data['profitTotalChange'], 'String');
            }
            if (data.hasOwnProperty('periodMin')) {
                obj['periodMin'] = ApiClient.convertToType(data['periodMin'], 'Number');
            }
            if (data.hasOwnProperty('periodMax')) {
                obj['periodMax'] = ApiClient.convertToType(data['periodMax'], 'Number');
            }
            if (data.hasOwnProperty('showActivePrograms')) {
                obj['showActivePrograms'] = ApiClient.convertToType(data['showActivePrograms'], 'Boolean');
            }
            if (data.hasOwnProperty('equityChartLength')) {
                obj['equityChartLength'] = ApiClient.convertToType(data['equityChartLength'], 'Number');
            }
            if (data.hasOwnProperty('showMyFavorites')) {
                obj['showMyFavorites'] = ApiClient.convertToType(data['showMyFavorites'], 'Boolean');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('take')) {
                obj['take'] = ApiClient.convertToType(data['take'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} managerId
    */
    managerId = undefined;
    /**
    * @member {String} brokerId
    */
    brokerId = undefined;
    /**
    * @member {String} brokerTradeServerId
    */
    brokerTradeServerId = undefined;
    /**
    * @member {Number} investMaxAmountFrom
    */
    investMaxAmountFrom = undefined;
    /**
    * @member {Number} investMaxAmountTo
    */
    investMaxAmountTo = undefined;
    /**
    * @member {module:model/InvestmentProgramsFilter.SortingEnum} sorting
    */
    sorting = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Number} levelMin
    */
    levelMin = undefined;
    /**
    * @member {Number} levelMax
    */
    levelMax = undefined;
    /**
    * @member {Number} profitAvgMin
    */
    profitAvgMin = undefined;
    /**
    * @member {Number} profitAvgMax
    */
    profitAvgMax = undefined;
    /**
    * @member {Number} profitTotalMin
    */
    profitTotalMin = undefined;
    /**
    * @member {Number} profitTotalMax
    */
    profitTotalMax = undefined;
    /**
    * @member {Number} profitTotalPercentMin
    */
    profitTotalPercentMin = undefined;
    /**
    * @member {Number} profitTotalPercentMax
    */
    profitTotalPercentMax = undefined;
    /**
    * @member {Number} profitAvgPercentMin
    */
    profitAvgPercentMin = undefined;
    /**
    * @member {Number} profitAvgPercentMax
    */
    profitAvgPercentMax = undefined;
    /**
    * @member {module:model/InvestmentProgramsFilter.ProfitTotalChangeEnum} profitTotalChange
    */
    profitTotalChange = undefined;
    /**
    * @member {Number} periodMin
    */
    periodMin = undefined;
    /**
    * @member {Number} periodMax
    */
    periodMax = undefined;
    /**
    * @member {Boolean} showActivePrograms
    */
    showActivePrograms = undefined;
    /**
    * @member {Number} equityChartLength
    */
    equityChartLength = undefined;
    /**
    * @member {Boolean} showMyFavorites
    */
    showMyFavorites = undefined;
    /**
    * @member {Number} skip
    */
    skip = undefined;
    /**
    * @member {Number} take
    */
    take = undefined;






    /**
    * Allowed values for the <code>sorting</code> property.
    * @enum {String}
    * @readonly
    */
    static SortingEnum = {
    
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

    /**
    * Allowed values for the <code>profitTotalChange</code> property.
    * @enum {String}
    * @readonly
    */
    static ProfitTotalChangeEnum = {
    
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



}


