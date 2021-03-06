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


import ApiClient from "../ApiClient";
import ErrorViewModel from '../model/ErrorViewModel';
import RateViewModel from '../model/RateViewModel';
import RequestRate from '../model/RequestRate';

/**
* Rate service.
* @module api/RateApi
* @version v1
*/
export default class RateApi {

    /**
    * Constructs a new RateApi. 
    * @alias module:api/RateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get rate
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestRate} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateViewModel} and HTTP response
     */
    apiRatePostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RateViewModel;

      return this.apiClient.callApi(
        '/api/rate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get rate
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestRate} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateViewModel}
     */
    apiRatePost(opts) {
      return this.apiRatePostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
