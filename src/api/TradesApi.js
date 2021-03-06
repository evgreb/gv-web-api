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
import TradesViewModel from '../model/TradesViewModel';

/**
* Trades service.
* @module api/TradesApi
* @version v1
*/
export default class TradesApi {

    /**
    * Constructs a new TradesApi. 
    * @alias module:api/TradesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get trades by IPFS hash id
     * @param {module:model/String} type 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipfsHashId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TradesViewModel} and HTTP response
     */
    apiTradesIpfsHistoryGetWithHttpInfo(type, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling apiTradesIpfsHistoryGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'ipfsHashId': opts['ipfsHashId'],
        'type': type
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TradesViewModel;

      return this.apiClient.callApi(
        '/api/trades/ipfsHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get trades by IPFS hash id
     * @param {module:model/String} type 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipfsHashId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TradesViewModel}
     */
    apiTradesIpfsHistoryGet(type, opts) {
      return this.apiTradesIpfsHistoryGetWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
