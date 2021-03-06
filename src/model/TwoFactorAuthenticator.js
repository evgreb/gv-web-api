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
* The TwoFactorAuthenticator model module.
* @module model/TwoFactorAuthenticator
* @version v1
*/
export default class TwoFactorAuthenticator {
    /**
    * Constructs a new <code>TwoFactorAuthenticator</code>.
    * @alias module:model/TwoFactorAuthenticator
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TwoFactorAuthenticator</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TwoFactorAuthenticator} obj Optional instance to populate.
    * @return {module:model/TwoFactorAuthenticator} The populated <code>TwoFactorAuthenticator</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorAuthenticator();

            
            
            

            if (data.hasOwnProperty('sharedKey')) {
                obj['sharedKey'] = ApiClient.convertToType(data['sharedKey'], 'String');
            }
            if (data.hasOwnProperty('authenticatorUri')) {
                obj['authenticatorUri'] = ApiClient.convertToType(data['authenticatorUri'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} sharedKey
    */
    sharedKey = undefined;
    /**
    * @member {String} authenticatorUri
    */
    authenticatorUri = undefined;








}


