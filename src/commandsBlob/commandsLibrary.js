/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the ssytem defined commands as a map between function names and function calls.
 * @requires module:nominal
 * @requires module:integrationTests
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:word.constants
 * @requires module:system.constants
 * @requires module:message.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let nominalCommands = require('./commands/nominal');
let integrationTests = require('./commands/integrationTests');
let loggers = require('../executrix/loggers');
let bas = require('../constants/basic.constants');
let wr1 = require('../constants/word1.constants');
let sys = require('../constants/system.constants');
let msg = require('../constants/message.constants');
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
// commandsBlob.commandsLibrary.
let namespacePrefix = wr1.ccommands + wr1.cBlob + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @NOTE Pelase be aware taht the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */
export const initCommandsLibrary = function() {
  let functionName = initCommandsLibrary.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  D[wr1.cCommands] = {};
  D[wr1.cCommands] = {
    // Commands
    // ***********************************************
    // Nominal commands in order
    // ***********************************************
    [cmd.cechoCommand]: (inputData, inputMetaData) => nominalCommands.echoCommand(inputData, inputMetaData)
    [wr1.cexit]: (inputData, inputMetData) => nominalCommands.exit(inputData, inputMetData),
    [wr1.cversion]: (inputData, inputMetaData) => nominalCommands.version(inputData, inputMetaData),
    [wr1.cabout]: (inputData, inputMetaData) => nominalCommands.about(inputData, inputMetaData),
    [wr1.cname]: (inputData, inputMetaData) => nominalCommands.name(inputData, inputMetaData),
    [cmd.cclearScreen]: (inputData, inputMetData) => nominalCommands.clearScreen(inputData, inputMetaData)

    // ***********************************************
    // Integration Test commands in order
    // ***********************************************

  };
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};