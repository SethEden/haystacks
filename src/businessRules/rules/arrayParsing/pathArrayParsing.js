/**
 * @file pathArrayParsing.js
 * @module pathArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to paths.
 * @requires module:stringParsing
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import stringParsing from './stringParsing.js';
import configurator from '../../executrix/configurator.js';
import fileOperations from '../../executrix/fileOperations.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function doesArrayContainFilename
 * @desription Checks if an array contains a filename, after stripping off the path.
 * @param {array<string>} inputData The array of file names that should be checkd for the input file name we are looking for.
 * @param {string} inputMetaData The file name we are looking for in the input array.
 * @return {boolean} A True or False value to indicate if the file name was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
const doesArrayContainFilename = function(inputData, inputMetaData) {
  let functionName = doesArrayContainFilename.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  // NOTE: This call doesn't actually work, it may have orked at one time, but it doesn't work now.
  // And I'm not going to spend the time trying to figure out why,
  // when it will be much simpler to ust call that same funtion in a loop to figure out the result.
  // Can solve this when we build unit tests.
  returnData = doesArrayContainValue(inputData, inputMetaData, stringParsing.ascertainMatchingFilenames);

  // NOTE: The beow code also orks, I am going to attempt to re-enable the above code and see if it alo works.
  // YES! This is a second way of doing the same thing. If the above code ever has a problem, we can fall back to this method.
  // for (let i = 0; i < inputData.Length; i++) {
  //   if (stringParsing.ascertainMatchingFilenames(inputData[i], inputMetaData) === true) {
  //     returnData = true;
  //     break;
  //   }
  // }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function readDiretoryContents
 * @description Scans an input folder path recursively and
 * returns all of the contents of all files and folders and their paths in an array.
 * This is a wrapper function to expose the fileOperations function readDirectoryContents,
 * out to client applications that will need this functionality.
 * @param {string} inputData The path for the folder that should be scanned recursively.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of the files & folders contained within the input path.
 * @author Seth Hollingsead
 * @date 2022/04/08
 */
const readDirectoryContents = function(inputData, inputMetaData) {
  let functionName = readDirectoryContents.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  returnData = fileOperations.readDirectoryContents(inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getFileAndPathListForPath
 * @description Scans all files and folders recursively given an input path and
 * returns a list of all files and their full paths fournd under the specified input path.
 * @param {string} inputData The path that should be scanned for files and their full paths.
 * @param {integer} inputMetaData Optional file limit, ignored if the configuration flag is not set to true,
 * if nothign is passed the configuratino setting will be used.
 * @return {array<string>} The array that contains the full path and file name for every file found under the specified path.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const getFileAndPathListForPath = function(inputData, inputMetaData) {
  let functionName = getFileAndPathListForPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputMetaData) {
      enableFilesListLimit = configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableFilesListLimit);
      filesListLimit = inputMetaData;
    } else {
      enableFilesListLimit = configurator.getConfigurationSetting(wrd.csystem, cfg.cEnableFilesListLimit);
      filesListLimit = configurator.getConfigurationSetting(wrd.csystem, cfg.cFilesListLimit);
    }
    // filesListLimit is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cfilesListLimitIs + filesListLimit);
    returnData = fileBroker.scanDirectoryContents(inputData, enableFilesListLimit, filesListLimit);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  doesArrayContainFilename,
  readDirectoryContents,
  getFileAndPathListForPath
};
