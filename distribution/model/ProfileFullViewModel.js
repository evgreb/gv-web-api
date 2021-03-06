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
* The ProfileFullViewModel model module.
* @module model/ProfileFullViewModel
* @version v1
*/
var ProfileFullViewModel = function () {
    /**
    * Constructs a new <code>ProfileFullViewModel</code>.
    * @alias module:model/ProfileFullViewModel
    * @class
    */

    function ProfileFullViewModel() {
        _classCallCheck(this, ProfileFullViewModel);

        this.id = undefined;
        this.email = undefined;
        this.firstName = undefined;
        this.middleName = undefined;
        this.lastName = undefined;
        this.documentType = undefined;
        this.documentNumber = undefined;
        this.country = undefined;
        this.city = undefined;
        this.address = undefined;
        this.phone = undefined;
        this.birthday = undefined;
        this.gender = undefined;
        this.avatar = undefined;
        this.userName = undefined;
    }

    /**
    * Constructs a <code>ProfileFullViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProfileFullViewModel} obj Optional instance to populate.
    * @return {module:model/ProfileFullViewModel} The populated <code>ProfileFullViewModel</code> instance.
    */


    _createClass(ProfileFullViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProfileFullViewModel();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('firstName')) {
                    obj['firstName'] = _ApiClient2.default.convertToType(data['firstName'], 'String');
                }
                if (data.hasOwnProperty('middleName')) {
                    obj['middleName'] = _ApiClient2.default.convertToType(data['middleName'], 'String');
                }
                if (data.hasOwnProperty('lastName')) {
                    obj['lastName'] = _ApiClient2.default.convertToType(data['lastName'], 'String');
                }
                if (data.hasOwnProperty('documentType')) {
                    obj['documentType'] = _ApiClient2.default.convertToType(data['documentType'], 'String');
                }
                if (data.hasOwnProperty('documentNumber')) {
                    obj['documentNumber'] = _ApiClient2.default.convertToType(data['documentNumber'], 'String');
                }
                if (data.hasOwnProperty('country')) {
                    obj['country'] = _ApiClient2.default.convertToType(data['country'], 'String');
                }
                if (data.hasOwnProperty('city')) {
                    obj['city'] = _ApiClient2.default.convertToType(data['city'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('birthday')) {
                    obj['birthday'] = _ApiClient2.default.convertToType(data['birthday'], 'Date');
                }
                if (data.hasOwnProperty('gender')) {
                    obj['gender'] = _ApiClient2.default.convertToType(data['gender'], 'Boolean');
                }
                if (data.hasOwnProperty('avatar')) {
                    obj['avatar'] = _ApiClient2.default.convertToType(data['avatar'], 'String');
                }
                if (data.hasOwnProperty('userName')) {
                    obj['userName'] = _ApiClient2.default.convertToType(data['userName'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} email
        */

        /**
        * @member {String} firstName
        */

        /**
        * @member {String} middleName
        */

        /**
        * @member {String} lastName
        */

        /**
        * @member {String} documentType
        */

        /**
        * @member {String} documentNumber
        */

        /**
        * @member {String} country
        */

        /**
        * @member {String} city
        */

        /**
        * @member {String} address
        */

        /**
        * @member {String} phone
        */

        /**
        * @member {Date} birthday
        */

        /**
        * @member {Boolean} gender
        */

        /**
        * @member {String} avatar
        */

        /**
        * @member {String} userName
        */

    }]);

    return ProfileFullViewModel;
}();

exports.default = ProfileFullViewModel;