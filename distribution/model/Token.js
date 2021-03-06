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
* The Token model module.
* @module model/Token
* @version v1
*/
var Token = function () {
    /**
    * Constructs a new <code>Token</code>.
    * @alias module:model/Token
    * @class
    */

    function Token() {
        _classCallCheck(this, Token);

        this.tokenName = undefined;
        this.tokenSymbol = undefined;
        this.initialPrice = undefined;
    }

    /**
    * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Token} obj Optional instance to populate.
    * @return {module:model/Token} The populated <code>Token</code> instance.
    */


    _createClass(Token, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Token();

                if (data.hasOwnProperty('tokenName')) {
                    obj['tokenName'] = _ApiClient2.default.convertToType(data['tokenName'], 'String');
                }
                if (data.hasOwnProperty('tokenSymbol')) {
                    obj['tokenSymbol'] = _ApiClient2.default.convertToType(data['tokenSymbol'], 'String');
                }
                if (data.hasOwnProperty('initialPrice')) {
                    obj['initialPrice'] = _ApiClient2.default.convertToType(data['initialPrice'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} tokenName
        */

        /**
        * @member {String} tokenSymbol
        */

        /**
        * @member {Number} initialPrice
        */

    }]);

    return Token;
}();

exports.default = Token;