/**
 * @file commandArrayParsing.js
 * @module commandArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to commands.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import auxiliaryArrayParsing from './auxiliaryArrayParsing.js';
import dataArrayParsing from './dataArrayParsing.js';
import wordArrayParsing from './wordArrayParsing.js';
import characterStringParsing from '../stringParsing/characterStringParsing.js';
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function solveLehmerCode
 * @description Used the inputData as an addressable Lehmer Code to find all possible combinations of array elements.
 * @param {array<integer>} inputData The Lehmer code addressable index array we will use to permutate over all possible combinations.
 * @param {array<array<string>>} inputMetaData The nested array that contains all instances of strings that should be used when generating permutations.
 * @return {string} The delimited list of possible combinations generated by solving the Lehmer Code.
 * @author Seth Hollingsead
 * @date 2022/01/20
 * @NOTE: https://en.wikipedia.org/wiki/Lehmer_code
 */
const solveLehmerCode = function(inputData, inputMetaData) {
  let functionName = solveLehmerCode.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let lengthOfInputData = inputData.length;
    let expandedLehmerCodeArray = [];
    let tempArray = [];
    let lehmerCodeArray = Array.from(Array(lengthOfInputData), () => 0);
    expandedLehmerCodeArray = dataArrayParsing.arrayDeepClone(recursiveArrayExpansion([0, lehmerCodeArray], inputData));
    // expandedLehmerCodeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cexpandedLehmerCodeArrayIs + JSON.stringify(expandedLehmerCodeArray));

    // Now we just iterate over each array in expandedLehmerCodeArray and call: getLehmerCodeValue
    for (let i = 0; i < expandedLehmerCodeArray.length - 1; i++) {
      let lehmerCodeStringValue = getLehmerCodeValue(expandedLehmerCodeArray[i], inputMetaData);
      if (i === 0) {
        returnData = returnData + lehmerCodeStringValue;
      } else {
        returnData = returnData + bas.cComa + lehmerCodeStringValue;
      }
    } // End-for (let i = 0; i < expandedLehmerCodeArray.length - 1; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function recursiveArrayExpansion
 * @description Recursively expands all possible combinations of an input aray given an index of expansion andreturns the list of arrays.
 * @param {array<integer,array<integer>>} inputData The index of expansion and the array to be expanded as an array object.
 * @param {array<integer>} inputMetaData The Lehmer Codex that should be used to set the limit of expansion based on the index of expansion.
 * @return {array<array<integer>>} The final list of arrays afer the array expansion has completed sucessfully.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
const recursiveArrayExpansion = function(inputData, inputMetaData) {
  let functionName = recursiveArrayExpansion.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [];
  if (inputData && inputMetaData && dataArrayParsing.isArray(inputData) === true && dataArrayParsing.isArray(inputMetaData) === true && inputData.length > 0 && inputMetaData.length > 0) {
    // Setup & parse the inputData & inputMetaData into a format we can use to actually do recursive array expansion.
    let indexOfExpansion = inputData[0];
    let arrayToBeExpanded = inputData[1];
    let limitOfExpansion = inputMetaData[indexOfExpansion];
    // indexOfExpansion is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cindexOfExpansionIs + indexOfExpansion);
    // arrayToBeExpanded is:
    loggers.consoleLog(namespacePrefix + functionName, msg.carrayToBeExpandedIs + JSON.stringify(arrayToBeExpanded));
    // imitOfExpansion is:
    loggers.consoleLog(namespacePrefix + functionName, msg.climitOfExpansion + limitOfExpansion);
    let masterTempReturnData = []; // When we are all done we will set the returnData back to the list of arays in this array.

    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }

    // First level array expansion.
    for (let i = 0; i <= limitOfExpansion; i++) {
      let lehmerCodeArray1 = dataArrayParsing.arrayDeepClone(arrayToBeExpanded, '');
      // returnData is:
      loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
      lehmerCodeArray1[indexOfExpansion] = i;
      if (auxiliaryArrayParsing.doesArrayContainValue(returnData, lehmerCodeArray1, wordArrayParsing.ascertainMatchingElements) === false) {
        // pushing LehmerCodeArray1 to returnData value:
        loggers.consoleLog(namespacePrefix + functionName, msg.cpushingLehmerCodeArray1ToReturnDataValue + JSON.stringify(lehmerCodeArray1));
        returnData.push(lehmerCodeArray1);
        // returnData after push is:
        loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterPushIs + JSON.stringify(returnData));
      } // End-if (auxiliaryArrayParsing.doesArrayContainValue(returnData, lehmerCodeArray1, wordArrayParsing.ascertainMatchingElements) === false)
    } // End-for (let i = 0; i <= limitOfExpansion; i++)
    // returnData after level 1 is:
    loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterLevel1Is + JSON.stringify(returnData));

    // Second level array expansion, this is where we call recursively.
    // We need to determine if the index of expansion is equal to the length of the arrayToBeExpanded.
    // If it is then we have reached our recursive expansion limit.
    // If NOT then we need to recursively expand some more on each of the arrays that are now in the returnData array.
    // arrayToBeExpanded.length is:
    loggers.consoleLog(namespacePrefix + functionName, msg.carrayToBeExpandedDotLengthIs + arrayToBeExpanded.length);
    if (indexOfExpansion < arrayToBeExpanded.length - 1) {
      // We need to reove arrays from the returnData and recursiely call the recursiveArrayExpansion with each array we remove.
      // The data we get back from each recursie call should be pushed back to masterTempReturnData array.
      // returnData.length is:
      loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataDotLengthIs + returnData.length);
      // Make sure we clone the array we will be removing array elements from,
      // because otherwise we would be looping over the same array we are removing elements from,
      // which would mean that we would never visit all of the elements.
      // https://stackoverflow.com/questions/54081930/why-array-foreach-array-pop-would-not-empty-the-array
      let returnDataTemp = dataArrayParsing.arrayDeepClone(returnData, '');
      returnDataTemp.forEach(function(item) {
        // returnData BEFORE POP is:
        loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataBeforePopIs + JSON.stringify(returnData));
        let lehmerCodeArray2 = dataArrayParsing.arrayDeepClone(returnData.pop(), '');
        // returnData AFTER POP is:
        loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataAfterPopIs + JSON.stringify(returnData));
        // masterTempReturnData BEFORE recursie call is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cmasterTempReturnDataBeforeRecursiveCallIs + JSON.stringify(masterTempReturnData));
        let tempReturnData1 = dataArrayParsing.arrayDeepClone(recursiveArrayExpansion([indexOfExpansion + 1, lehmerCodeArray2], inputMetaData), '');
        // tempReturnData1 is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ctempReturnData1Is + JSON.stringify(tempReturnData1));
        // tempReturnData1.length is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ctempReturnData1DotLengthIs + tempReturnData1.length);
        for (let k = 0; k <= tempReturnData1.length - 1; k++) {
          // BEGIN k-th iteration:
          loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_kthIteration + k);
          if (auxiliaryArrayParsing.doesArrayContainValue(masterTempReturnData, tempReturnData1[k], wordArrayParsing.ascertainMatchingElements) === false) {
            // pushing tempReturnData1[k] value:
            loggers.consoleLog(namespacePrefix + functionName, msg.cpushingTempReturnData1Kvalue + JSON.stringify(tempReturnData1[k]));
            masterTempReturnData.push(dataArrayParsing.arrayDeepClone(tempReturnData1[k], ''));
          } // End-if (auxiliaryArrayParsing.doesArrayContainValue(masterTempReturnData, tempReturnData1[k], wordArrayParsing.ascertainMatchingElements) === false)
          // END k-th iteration:
          loggers.consoleLog(namespacePrefix + functionName, msg.cEND_kthIteration + k);
        } // End-for (let k = 0; k <= tempReturnData1.length - 1; k++)
        tempReturnData1 = null;
        // masterTempReturnData AFTER recursive call is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cmasterTempReturnDataAfterRecursiveCallIs + JSON.stringify(masterTempReturnData));
      }); // End-for-each (returnDataTemp.forEach(function(item))
      returnData = dataArrayParsing.arrayDeepClone(masterTempReturnData, '');
    } // End-if (indexOfExpansion < arrayToBeExpanded.length - 1)
  } // End-if (inputData && inputMetaData && dataArrayParsing.isArray(inputData) === true && dataArrayParsing.isArray(inputMetaData) === true && inputData.length > 0 && inputMetaData.length > 0)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getLehmerCodeValue
 * @description Takes a Lehmer code array and an array of arays and uses the Lehmer Code array to look up the corrosponding values in the array of arrays.
 * @param {array<integer>} inputData The Lehmer code array with indices for values we should get & return.
 * @param {array<array<string>>} inputMetaData The nested array of arrays with the values we should get and combine then return as a single string.
 * @return {string} The joined string from each of the array element strings at the Lehmer code indices.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
const getLehmerCodeValue = function(inputData, inputMetaData) {
  let functionName = getLehmerCodeValue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let lengthOfInputData = inputData.length;
    for (let i = 0; i < lengthOfInputData; i++) {
      // BEGIN i-th iteration:
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
      let lookupIndex = inputData[i];
      // lookupIndex is:
      loggers.consoleLog(namespacePrefix + functionName, msg.clookupIndexIs + lookupIndex);
      let lookupValue = inputMetaData[i][lookupIndex];
      // lookupValue is:
      loggers.consoleLog(namespacePrefix + functionName, msg.clookupValueIs + lookupValue);
      returnData = returnData + lookupValue;
      // returnData is:
      loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
      // END i-th iteration:
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
    } // End-for (let i = 0; i < lengthOfInputData; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateCommandAliases
 * @description Generates all possible combinations of command aliases given a set of command words and command word abreviations.
 * @param {object} inputData An object containing all of the meta-data needed for command words and
 * command word abreviations needed to generate every possible combination of command aliases.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma-separated list of every possible combination of command aliases.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const generateCommandAliases = function(inputData, inputMetaData) {
  let functionName = generateCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // {"wonder":"wondr,wundr,wndr","Woman":"wman,wmn,womn","Amazing":"amzing,amzng"}
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let primaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.cprimaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.cprimaryCommandDelimiterIs + primaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandDelimiterIs + secondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wrd.csystem, cfg.ctertiaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.ctertiaryCommandDelimiterIs + tertiaryCommandDelimiter);
    let commandDelimiter = '';
    let commandWordsKeys1 = Object.keys(inputData);
    let commandWordAliasesArray = [];
    let masterCommandWordAliasesArray = [commandWordsKeys1.length - 1];
    let masterArrayIndex = [commandWordsKeys1.length - 1];
    for (let i = 0; i < commandWordsKeys1.length; i++) {
      // commandWordsKeys1.forEach((key1) => {
      let key1 = commandWordsKeys1[i];
      let commandWordAliases = inputData[key1];
      if (commandWordAliases.includes(primaryCommandDelimiter)) {
        commandDelimiter = primaryCommandDelimiter;
      } else if (commandWordAliases.includes(secondaryCommandDelimiter)) {
        commandDelimiter = secondaryCommandDelimiter;
      } else if (commandWordAliases.includes(tertiaryCommandDelimiter)) {
        commandDelimiter = tertiaryCommandDelimiter;
      }
      commandWordAliases = commandWordAliases + commandDelimiter + key1;
      // commandWordAliases BEFORE CHANGE is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccommandWordAliasesBeforeChangeIs + commandWordAliases);
      commandWordAliasesArray = commandWordAliases.split(commandDelimiter);
      masterArrayIndex[i] = commandWordAliasesArray.length - 1;
      for (let j = 0; j < commandWordAliasesArray.length; j++) {
        let commandAliasWord = commandWordAliasesArray[j];
        if (characterStringParsing.isFirstCharacterLowerCase(commandAliasWord, '') === true) {
          let firstLetterOfCommandAliasWord = commandAliasWord.charAt(0).toUpperCase();
          commandAliasWord = characterStringParsing.replaceCharacterAtIndexOfString(commandAliasWord, 0, firstLetterOfCommandAliasWord);
          commandWordAliasesArray[j] = commandAliasWord; // Saved the changes back to array.
        }
      } // End-for (let j = 0; j < commandWordAliasesArray.length; j++)
      // commandWordAliasesArray AFTER CHANGE is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccommandWordAliasesAfterChangeIs + JSON.stringify(commandWordAliasesArray));
      masterCommandWordAliasesArray[i] = commandWordAliasesArray; // Try to build an array of arrays (2D)
    } // End-for (let i = 0; i < commandWordsKeys1.length; i++)
    // masterCommandWordAliasesArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cmasterCommandWordAlisesArrayIs + JSON.stringify(masterCommandWordAliasesArray));
    // masterArrayIndex is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cmasterArrayIndexIs + JSON.stringify(masterArrayIndex));

    // NOTES: Console output is:
    // masterCommandWordAliasesArray is: [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // masterArrayIndex is: [4,4,3]
    //
    // We should be able to have 2 nested for-loops, and we will declare a counter array initialized to [0,0,0] to match the masterArrayIndex above.
    // The counter array tells us which combination of words we should get.
    // We can simply push those combination of words as a string on a stack we will make for this business rule.
    // Then iterate the last array element as long as it's not greater than the number in the master array index and do the same things over again.
    // When the array index for the last element in the array reaches the masterArrayIndex for the same array index then we increment the second from the last array counter.
    // and start over again with the last element in the array counter.
    // This way we should be able to iterate over the entire 2D array and get every combination without having to create x number of nested for-loops.
    // Essentially we will be having 2-nested for-loops looping over the counter array. The top level loop will be looping over masterArrayIndex.length,
    // and the second loop will be iterating over the integers in the counter array.
    // The counter array will tell the algorthim which combination of words to put together and push on the stack.
    //
    // NOTE: The algorthim described above is called: Lehmer code
    // https://en.wikipedia.org/wiki/Lehmer_code
    let returnData = solveLehmerCode(masterArrayIndex, masterCommandWordAliasesArray);
    // Command Aliases are:
    console.log(msg.cCommandAliasesAre + returnData);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function aggregateCommandArguments
 * @description Combines all of the input arguments into a single command line to be executed by the command parser.
 * @param {array<string>} inputData An array of strings that represents the command and command parameters to execute.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A sinle string command line of code that should be sent to the command parser.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const aggregateCommandArguments = function(inputData, inputMetaData) {
  let functionName = aggregateCommandArguments.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.length > 3) {
      for (let i = 2; i < inputData.length; i++) {
        // BEGIN i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
        if (i === 2) {
          returnData = stringParsing.cleanCommandInput(inputData[i]);
        } else {
          returnData = returnData + bas.cSpace + stringParsing.cleanCommandInput(inputData[i]);
        }
        // returnData is:
        loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
        // END i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
      } // End-for (let i = 2; i < inputData.length; i++)
    } else { // else-clause if (inputData.length > 3)
      returnData = stringParsing.cleanCommandInput(inputData[2], '');
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  solveLehmerCode,
  recursiveArrayExpansion,
  getLehmerCodeValue,
  generateCommandAliases,
  aggregateCommandArguments
};
