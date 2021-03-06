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
import OrderModel from './OrderModel';





/**
* The TradesViewModel model module.
* @module model/TradesViewModel
* @version v1
*/
export default class TradesViewModel {
    /**
    * Constructs a new <code>TradesViewModel</code>.
    * @alias module:model/TradesViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TradesViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TradesViewModel} obj Optional instance to populate.
    * @return {module:model/TradesViewModel} The populated <code>TradesViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TradesViewModel();

            
            
            

            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], [OrderModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('tradeServerType')) {
                obj['tradeServerType'] = ApiClient.convertToType(data['tradeServerType'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/OrderModel>} trades
    */
    trades = undefined;
    /**
    * @member {Number} total
    */
    total = undefined;
    /**
    * @member {module:model/TradesViewModel.TradeServerTypeEnum} tradeServerType
    */
    tradeServerType = undefined;






    /**
    * Allowed values for the <code>tradeServerType</code> property.
    * @enum {String}
    * @readonly
    */
    static TradeServerTypeEnum = {
    
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



}


