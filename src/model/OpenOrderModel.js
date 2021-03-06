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
* The OpenOrderModel model module.
* @module model/OpenOrderModel
* @version v1
*/
export default class OpenOrderModel {
    /**
    * Constructs a new <code>OpenOrderModel</code>.
    * @alias module:model/OpenOrderModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OpenOrderModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OpenOrderModel} obj Optional instance to populate.
    * @return {module:model/OpenOrderModel} The populated <code>OpenOrderModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenOrderModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'Number');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Number} ticket
    */
    ticket = undefined;
    /**
    * @member {String} symbol
    */
    symbol = undefined;
    /**
    * @member {Number} volume
    */
    volume = undefined;
    /**
    * @member {Number} price
    */
    price = undefined;
    /**
    * @member {Number} profit
    */
    profit = undefined;
    /**
    * @member {module:model/OpenOrderModel.DirectionEnum} direction
    */
    direction = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;






    /**
    * Allowed values for the <code>direction</code> property.
    * @enum {String}
    * @readonly
    */
    static DirectionEnum = {
    
        /**
         * value: "Buy"
         * @const
         */
        "Buy": "Buy",
    
        /**
         * value: "Sell"
         * @const
         */
        "Sell": "Sell",
    
        /**
         * value: "Balance"
         * @const
         */
        "Balance": "Balance",
    
        /**
         * value: "Credit"
         * @const
         */
        "Credit": "Credit",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined"    
    };



}


