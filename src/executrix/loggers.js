/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/18
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var configurator = require('./configurator');
var fileOperations = require('./fileOperations');
var D = require('../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `executrix.${baseFileName}.`;

function consoleLog(classPath, message) {
  let functionName = consoleLog.name;
  if (Object.keys(D).length !== 0) { // Make sure we don't log anything if we haven't yet loaded the configuration data.
    let consoleLogEnabled = configurator.getConfigurationSetting('system', 'consoleLogEnabled');
    if (consoleLogEnabled === true) {
      console.log(`BEGIN ${namespacePrefix}${functionName} function`);
      console.log(`classPath is: ${classPath}`);
      console.log(`message is: ${message}`);
      let logFile = configurator.getConfigurationSetting('system', 'applicationCleanedRootPath');
      if (logFile !== undefined) {
        logFile = `${logFile}//logs`;
        console.log(`Logfile before path.resolve is: ${logFile}`);
        logFile = path.resolve(logFile);
        console.log(`Logfile after path.resolve is: ${logFile}`);
        logFile = logFile + '//' + configurator.getConfigurationSetting('system', 'logFilePathAndName');
        console.log(`logFile after adding the log filename: ${logFile}`);
      }

      let debugFunctionSetting = false;
      let debugFileSetting = false;
      let debugSetting = false;
      let outputMessage = '';
      let configurationName = '';
      let configurationNamespace = '';

      console.log('determine if there is a configuration setting for the class path.');
      configuratinoName = configurator.processConfigurationNameRules(classPath);
      console.log(`configuratinoName is: ${configuratinoName}`);
      configurationNamespace = configurator.processConfigurationNamespaceRules(classPath);
      console.log(`configurationNamespace is: ${configurationNamespace}`);
      debugFunctionSetting = configurator.getConfigurationSetting(`debugSettings.${configurationNamespace}`, configurationName);
      console.log(`debugFunctionSetting is: ${debugFunctionSetting}`);
      debugFileSetting = configurator.getConfigurationSetting(`debugSettings.${configurationNamespace}`, '');
      console.log(`debugFileSetting is: ${debugFileSetting}`);
      if (debugFunctionSetting || debugFileSetting) {
        debugSetting = true;
      }
      console.log(`debugSetting is: ${debugSetting}`);
      console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');
      if (logFile !== undefined && (logFile.toUpperCase().includes('LOG') || logFile.toUpperCase().includes('TXT'))) {
        consoleLogProcess(debugSetting, logFile, classPath, message, true);
      } else { // No text log file specified, proceed with the same process for console only.
        consoleLogProcess(debugSetting, undefined, classPath, message, false);
      }
      console.log(`END ${namespacePrefix}${functionName} function`);
    } // end-if (consoleLogEnabled === true)
  } // end-if (Object.keys(D).length != 0)
};

/**
 * @function consoleLogProcess
 * @description A function that will print a message to a log file and the console, or just the console.
 * The output depends on if there was a txt/log file specified or not.
 * @param {boolean} debugSetting A TRUE or FALSE value to indicate if the log action is enabled or not.
 * @param {string} logFile The path to the log file where the message should be logged.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output (log file and/or console).
 * @param {boolean} loggingToFileAndConsole A TRUE or FALSE value to indicate if the log should be done to the specified log file and the console.
 * If no log file is specified by the caller/settings system then this will be FALSE and only the console will be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 */
function consoleLogProcess(debugSetting, logFile, classPath, message, loggingToFileAndConsole) {
  let functionName = consoleLogProcess.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`debugSetting is: ${debugSetting}`);
  console.log(`logFile is: ${logFile}`);
  console.log(`classPath is: ${classPath}`);
  console.log(`message is: ${message}`);
  console.log(`loggingToFileAndConsole is: ${loggingToFileAndConsole}`);
  let outputMessage = '';
  let messageIsValid = false;

  if (debugSetting !== undefined && debugSetting === true) {
    console.log('The debugSetting is not undefined and also true.');
    outputMessage = parseClassPath(logFile, classPath, message);
    console.log(`outputMessage is: ${outputMessage}`);
    console.log(`message is: ${message}`);
    messageIsValid = validMessage(outputMessage, message);
    if (messageIsValid === true) {
      // TODO: Add rule here to replace double percent with message/class-path.
      console.log(outputMessage);
    }
    if (messageIsValid === true && loggingToFileAndConsole === true) {
      printMessageToFile(ogFile, outputMessage);
      console.log('DONE printing the message to the logFile');
    }
  } else if (configurator.getConfigurationSetting('system', 'debugTestExhaustive') === true) {
    console.log('else-block the debugTestExhaustive setting is true!');
    // TODO: Add rule here to replace double percent with message/class-path.
    // Debug Exhaustive is probably not the best, we might want to consider another configuration setting to
    // enable or disable the console specifically. Right now there is no real business need for it.
    // If you really wanted to disable it just comment it out here.
    console.log(outputMessage);
    if (loggingToFileAndConsole === true) {
      printMessageToFile(logFile, outputMessage);
      console.log('done printing the message to the log file.');
    }
  }
  console.log('Past all of the if-else-if-else blocks of code.');
  console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function validMessage
 * @description Looks at the parsed/processed output message and the original message
 * to determine if the message is a valid message to dump to the console and/or the log file (if specified).
 * @param {string|integer|boolean|object} outputMessage The message that has been parsed/processed.
 * @param {string|integer|boolean|object} originalMessage The original message passed in before processing/parsing.
 * @return {boolean} A TRUE or FALSE to indicate if the output message should be dumped to the log file and/or the console.
 * @author Seth Hollingsead
 * @date 2021/10/27
 */
function validMessage(outputMessage, originalMessage) {
  let functionName = validMessage.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`outputMessage is: ${outputMessage}`);
  console.log(`originalMessage is: ${originalMessage}`);
  let returnData = false;

  // This first if-condition catches the case that the output message has already
  // been parsed and modified according to the class path.
  if (outputMessage !== false && outputMessage !== originalMessage) {
    returnData = true;
  } else if (outputMessage !== false && outputMessage.includes('%%') === false) {
    // This else-if condition catches the case that the caller just wants to dump a generic message,
    // that doesn't have a class-path designation.
    returnData = true;
  }

  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function parseClassPath
 * @description Parses the class path and message pulling it apart for logging and looking at custom debug settings.
 * @param {string} logFile The file name and path to the log file where the data should be printed.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {string} Returns the message that should be printed ut to the console and logged to the log file.
 * @author Seth Hollingsead
 * @date 2021/10/27
 */
function parseClassPath(logFile, classPath, message) {
  let functionName = parseClassPath.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`logFile is: ${logFile}`);
  console.log(`classPath is: ${classPath}`);
  console.log(`message is: ${message}`);
  let className = '';
  let classFunctionName = '';
  let debugFunctionsSetting = false;
  let debugFilesSetting = false;
  let classPathArray = {};
  let returnData = '';

  className = `debugSettings.${configurator.processConfigurationNamespaceRules(classPath)}`;
  console.log(`className is: ${className}`);
  classFunctionName = configurator.processConfigurationNameRules(classPath);
  console.log(`classFunctionName is: ${classFunctionName}`);

  printMessageToFile(logFile, `Getting configuration setting value for: debugFunctions|${className}.${classFunctionName}`);
  console.log(`Getting configuration setting value for: debugFunctions|${className}.${classFunctionName}`);
  debugFunctionsSetting = configurator.getConfigurationSetting(className, classFunctionName);
  printMessageToFile(logFile, `debugFunctionsSetting is: ${debugFunctionsSetting}`);
  console.log(`debugFunctionsSetting is: ${debugFunctionsSetting}`);
  debugFilesSetting = configurator.getConfigurationSetting(className, '');
  printMessageToFile(logFile, `debugFilesSetting is: ${debugFilesSetting}`);
  console.log(`debugFilesSetting is: ${debugFilesSetting}`);
  if (debugFunctionsSetting || debugFilesSetting) {
    // TODO: Implement the colorizing of the message here.
    returnData = message;
  } else if ((debugFunctionsSetting === undefined && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === undefined && debugFilesSetting === false) ||
  (debugFunctionsSetting === false && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === false && debugFilesSetting === false)) {
    console.log('Something is undefined && false or some combination of both, return false');
    returnData = false;
  } else {
    // TODO: Implement the colorizing of the message here.
    returnData = message;
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function printMessageToFile
 * @description Prints a message to a log/text file.
 * @param {string} file The file path and file name where message data should be printed.
 * @param {string} message The message that should be logged to the log file if the specified flag is true.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 */
function printMessageToFile(file, message) {
  let functionName = printMessageToFile.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`file is: ${file}`);
  console.log(`message is: ${message}`);
  let dateTimeStamp = '';
  if (!file.includes('undefined')) {
    console.log('!file.includes(undefined)');
    if (configurator.getConfigurationSetting('system', 'logFileEnabled') === true) {
      console.log('LogFileEnabled = true');
      if (message) {
        // TODO: Once the colorizer is setup, remove the colorizer font styles from the string.
      }
      if (configurator.getConfigurationSetting('system', 'includeDateTimeStampInLogFiles') === true) {
        // Individual messages need to have a time stamp on them. So lets sign the message with a time stamp.
        dateTimeStamp = timers.getNowMoment('YYYYMMDD_HHmmssSSS');
        console.log(`dateTimeStamp is: ${dateTimeStamp}`);
        message = `${dateTimeStamp}: ${message}`;
      }
      fileOperations.appendMessageToFile(file, message);
    } else {
      console.log('ERROR: Failure to log to file: ' + file);
    }
  } else {
    console.log('ERROR: Log File includes undefined.');
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
};
