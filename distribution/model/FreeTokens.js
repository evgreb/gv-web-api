'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The FreeTokens model module.
* @module model/FreeTokens
* @version v1
*/
var FreeTokens = function () {
    /**
    * Constructs a new <code>FreeTokens</code>.
    * @alias module:model/FreeTokens
    * @class
    */

    function FreeTokens() {
        _classCallCheck(this, FreeTokens);

        this.total = undefined;
        this.investorsTokens = undefined;
        this.requestsTokens = undefined;
    }

    /**
    * Constructs a <code>FreeTokens</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FreeTokens} obj Optional instance to populate.
    * @return {module:model/FreeTokens} The populated <code>FreeTokens</code> instance.
    */


    _createClass(FreeTokens, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FreeTokens();

                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('investorsTokens')) {
                    obj['investorsTokens'] = _ApiClient2.default.convertToType(data['investorsTokens'], 'Number');
                }
                if (data.hasOwnProperty('requestsTokens')) {
                    obj['requestsTokens'] = _ApiClient2.default.convertToType(data['requestsTokens'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Number} total
        */

        /**
        * @member {Number} investorsTokens
        */

        /**
        * @member {Number} requestsTokens
        */

    }]);

    return FreeTokens;
}();

exports.default = FreeTokens;