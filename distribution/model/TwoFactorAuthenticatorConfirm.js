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
* The TwoFactorAuthenticatorConfirm model module.
* @module model/TwoFactorAuthenticatorConfirm
* @version v1
*/
var TwoFactorAuthenticatorConfirm = function () {
    /**
    * Constructs a new <code>TwoFactorAuthenticatorConfirm</code>.
    * @alias module:model/TwoFactorAuthenticatorConfirm
    * @class
    * @param code {String} 
    * @param sharedKey {String} 
    * @param password {String} 
    */

    function TwoFactorAuthenticatorConfirm(code, sharedKey, password) {
        _classCallCheck(this, TwoFactorAuthenticatorConfirm);

        this.code = undefined;
        this.sharedKey = undefined;
        this.password = undefined;


        this['code'] = code;this['sharedKey'] = sharedKey;this['password'] = password;
    }

    /**
    * Constructs a <code>TwoFactorAuthenticatorConfirm</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TwoFactorAuthenticatorConfirm} obj Optional instance to populate.
    * @return {module:model/TwoFactorAuthenticatorConfirm} The populated <code>TwoFactorAuthenticatorConfirm</code> instance.
    */


    _createClass(TwoFactorAuthenticatorConfirm, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new TwoFactorAuthenticatorConfirm();

                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('sharedKey')) {
                    obj['sharedKey'] = _ApiClient2.default.convertToType(data['sharedKey'], 'String');
                }
                if (data.hasOwnProperty('password')) {
                    obj['password'] = _ApiClient2.default.convertToType(data['password'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} code
        */

        /**
        * @member {String} sharedKey
        */

        /**
        * @member {String} password
        */

    }]);

    return TwoFactorAuthenticatorConfirm;
}();

exports.default = TwoFactorAuthenticatorConfirm;