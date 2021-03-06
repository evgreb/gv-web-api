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
* The InvestmentProgramRequestTxInfo model module.
* @module model/InvestmentProgramRequestTxInfo
* @version v1
*/
export default class InvestmentProgramRequestTxInfo {
    /**
    * Constructs a new <code>InvestmentProgramRequestTxInfo</code>.
    * @alias module:model/InvestmentProgramRequestTxInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgramRequestTxInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramRequestTxInfo} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramRequestTxInfo} The populated <code>InvestmentProgramRequestTxInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgramRequestTxInfo();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InvestmentProgramRequestTxInfo.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {module:model/InvestmentProgramRequestTxInfo.StatusEnum} status
    */
    status = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "Invest"
         * @const
         */
        "Invest": "Invest",
    
        /**
         * value: "Withdrawal"
         * @const
         */
        "Withdrawal": "Withdrawal"    
    };

    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "New"
         * @const
         */
        "New": "New",
    
        /**
         * value: "Executed"
         * @const
         */
        "Executed": "Executed",
    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled": "Cancelled"    
    };



}


