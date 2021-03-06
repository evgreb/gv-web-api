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
import DateChart from './DateChart';





/**
* The WalletStatistic model module.
* @module model/WalletStatistic
* @version v1
*/
export default class WalletStatistic {
    /**
    * Constructs a new <code>WalletStatistic</code>.
    * @alias module:model/WalletStatistic
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>WalletStatistic</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletStatistic} obj Optional instance to populate.
    * @return {module:model/WalletStatistic} The populated <code>WalletStatistic</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletStatistic();

            
            
            

            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [DateChart]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/DateChart>} chart
    */
    chart = undefined;








}


