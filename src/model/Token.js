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
* The Token model module.
* @module model/Token
* @version v1
*/
export default class Token {
    /**
    * Constructs a new <code>Token</code>.
    * @alias module:model/Token
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Token} obj Optional instance to populate.
    * @return {module:model/Token} The populated <code>Token</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Token();

            
            
            

            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('tokenSymbol')) {
                obj['tokenSymbol'] = ApiClient.convertToType(data['tokenSymbol'], 'String');
            }
            if (data.hasOwnProperty('initialPrice')) {
                obj['initialPrice'] = ApiClient.convertToType(data['initialPrice'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} tokenName
    */
    tokenName = undefined;
    /**
    * @member {String} tokenSymbol
    */
    tokenSymbol = undefined;
    /**
    * @member {Number} initialPrice
    */
    initialPrice = undefined;








}


