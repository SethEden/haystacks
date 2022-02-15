/**
 * @file clientRulesLibrary.js
 * @module clientRulesLibrary
 * @description Contains all of the client defined business rules as a map between function names and function calls.
 * @requires module:clientStringParsing
 * @requires module:application.business.constants
 * @requires module:application.function.constants
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

import * as clientStringParsing from './clientRules/clientStringParsing.js';
import * as app_biz from '../constants/application.business.constants.js';
import * as app_fnc from '../constants/application.function.constants.js';

console.log('app_fnc is: ' + JSON.stringify(app_fnc));

/**
 * @function initClientRulesLibrary
 * @description Initializes an object map of client busienss rules and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initClientRulesLibrary = function() {
  return {
    [app_biz.cclientEcho]: (inputData, inputMetaData) => (inputData, inputMetaData),

    // Client Busienss Rules
    // ***********************************************
    // clientStringParsing rules in order
    // ***********************************************
    [app_biz.ccustomEcho]: (inputData, inputMetaData) => clientStringParsing.customEcho(inputData, inputMetaData)
  };
};

// module.exports = {
//   [app_fnc.cinitClientRulesLibrary]: () => initClientRulesLibrary()
// };

export default {
  [app_fnc.cinitClientRulesLibrary]: () => initClientRulesLibrary()
  // initClientRulesLibrary
};
