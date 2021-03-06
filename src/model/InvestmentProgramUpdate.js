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
* The InvestmentProgramUpdate model module.
* @module model/InvestmentProgramUpdate
* @version v1
*/
export default class InvestmentProgramUpdate {
    /**
    * Constructs a new <code>InvestmentProgramUpdate</code>.
    * @alias module:model/InvestmentProgramUpdate
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgramUpdate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramUpdate} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramUpdate} The populated <code>InvestmentProgramUpdate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgramUpdate();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;








}


