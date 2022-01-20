/**
 * @file arrayParsing.js
 * @module arrayParsing
 * @description Contains all system defined business rules for parsing arrays with various operations.
 * @requires module:basic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:stringParsingUtilities
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../../constants/basic.constants');
let msg = require('../../constants/message.constants');
let sys = require('../../constants/system.constants');
let wr1 = require('../../constants/word1.constants');
let stringParsingUtilities = require('./stringParsingUtilities');
let loggers = require('../../executrix/loggers');
let path = require('path');

let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = sys.cbusinessRules + bas.cDot + wr1.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of the specified character in the inputData with another specified character.
 * @param {string} inputData A string that may or may not contain the specified
 * characters that should be converted to another specified character.
 * @param {array<string,string} inputMetaData An array of data that contains 2 additional string parameters:
 * inputMetaData[0] === character2Find - The character to be searched and replaced from the input string.
 * inputMetaData[1] === character2Replace - The character that should be used to replace
 * the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specified characters converted to the other specified character.
 * @author Seth Hollingsead
 * @date 2021/10/28
 */
export const replaceCharacterWithCharacter = function(inputData, inputMetaData) {
  let functionName = replaceCharacterWithCharacter.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData && !inputMetaData) {
    returnData = false;
  } else {
    returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {string} inputData String to decompose into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string} The array of words that were composed in the original string.
 * @author Seth Hollingsead
 * @date 2022/01/18
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 */
export const convertCamelCaseStringToArray = function(inputData, inputMetaData) {
  let functionName = convertCamelCaseStringToArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData;
  let caps = [];
  for (let i = 1; i < inputData.length; i++) {
    if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
  }
  if (caps.length > 0) {
    let last = 0;
    let decomposedString = [];
    for (let j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.slice(last, caps[j]));
      last = caps[j];
    }
    decomposedString.push(inputData.slice(last));
    returnData = decomposedString;
  } else {
    returnData = [inputData];
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getWordsArrayFromString
 * @description Gets an array of words from a string,
 * automatically determining how the words are delimited based on common word delimiters: camel case, space, period, dash & underscore.
 * @param {string} inputData The string that should be broken down into words and returned as an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
export const getWordsArrayFromString = function(inputData, inputMetaData) {
  let functionName = getWordsArrayFromString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData) {
    let wordCount = strParse.getWordCountInString(inputData, '');
    // wordCount is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cwordCountIs + wordCount);
    if (wordCount > 0) {
      let wordDelimiter = strParse.determineWordDelimiter(inputData, inputMetaData);
      // wordDelimiter is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cwordDelimiterIs + wordDelimiter);
      let stringContainsAcronym = strParse.doesStringContainAcronym(inputData, '');
      // stringContainsAcronym is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cstringContainsAcronymIs + stringContainsAcronym);
      if (wordDelimiter === sys.cCamelCase && stringContainsAcronym === false) {
        returnData = convertCamelCaseStringToArray(inputData, '');
      } else if (wordDelimiter != '' && wordDelimiter != sys.cCamelCase) {
        returnData = inputData.split(wordDelimiter);
      } else {
        // We don't need to be showing this warning unless we are debugging.
        loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordsArrayFromStringMessage1 + msg.cGetWordsArrayFromStringMessage2 + msg.cGetWordsArrayFromStringMessage3);
      }
    } // end-if (wordCount > 0)
  } // end-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function recombneStringArrayWithSpaces
 * @description Takes an array of strings and recombines them sequentially ith spaces between each array element.
 * This function is needed, because commands parse inputs by spaces ino an array,
 * and some commands need a single continuous strng that might be delimited by coma's.
 * So this function lets us recombine and teh re-parse the strng with another delimiter.
 * @param {array<string>} inputData The aray of strings that should be recombined.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string array with spaces between array elements.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const recombineStringArrayWithSpaces = function(inputData, inputMetaData) {
  let functionName = recombineStringArrayWithSpaces.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData) {
    returnData = inputData[1];
    for (let i = 2; i < inputData.length; i++) {
      returnData = returnData + bas.cSpace + inputData[i];
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertArrayToCamelCaseString
 * @description Takes an array of words and returns a camelCase string of the input words.
 * @param {array<string>} inputData The array of words that should be strung together into a single long string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains all of the words from the input array put together in sequential order.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const convertArrayToCamelCaseString = function(inputData, inputMetaData) {
  let functionName = convertArrayToCamelCaseString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData) {
    returnData = inputData.map((key, index) => strParse.mapWordToCamelCaseWord(key, index));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidatedSring().
 * @param {array<string>} inputData The array of strigns that should be checked if it contains the specified string.
 * @param {string} inputMetaData The string we are looking for in the array.
 * @return {boolean} A Boolean to indicate if the string is found in the array or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const doesArrayContainLowerCaseConsolidatedString = function(inputData, inputMetaData) {
  let functionName = doesArrayContainLowerCaseConsolidatedString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData && inputMetaData) {
    // I'm not sure if value1 & value2 below should be referanced to inputData & inputMetaData?
    // I get the arrow function is passign these values to the strParse.aggregateNumericalDifferenceBetweenTwoStrings function.
    // But I'm not sure how or what values are being passed for value1 & value2.
    let stringDelta = (value1, value2) => strParse.aggregateNumericalDifferenceBetweenTwoStrings(value1, value2) < 2;
    // stringDelta value is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cstringDeltaValueIs + stringDelta);
    returnData = doesArrayContainValue(inputData, inputMetaData, stringDelta);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainCharacter
 * @description Parses through all the elements of an array and determiens if any one of them contains the input character.
 * @param {string|boolean|integer|object} inputData The character that should be searched for in the array of elements.
 * @param {array<string|boolean|integer|object>} inputMetaData The array that should be searched for the specified character/value/etc...
 * @return {boolean} True or False to indicate if the value was found or not found.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const doesArrayContainCharacter = function(inputData, inputMetaData) {
  let functionName = doesArrayContainCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < inputMetaData.length; i++) {
      let arrayEleemnt = inputMetaData[i];
      if (arayElement.includes(inputData) === true) {
        returnData = true;
        break;
      }
    } // end-for (let i = 0; i < inputMetaData.length; i++)
  } // end-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeCharacterFromArray
 * @description Removes all instances of a character or value from all array elements.
 * @param {string|integer|boolean|float|object} inputData The character, integer, boolean, float or object
 * that should be reoved from all instances of the input array.
 * @param {array<string|boolean|integer|object>} inputMetaData Teh array from which all isntances of the input character, integer, etc...should be removed.
 * @return {array<string|boolean|integer|object} The array after having the specified character removed from all elements of the input array.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const removeCharacterFromArray = function(inputData, inputMetaData) {
  let functionName = removeCharacterFromArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < inputMetaData.length; i++) {
      let arrayElement = inputMetaData[i];
      if (arrayElement.includes(inputData) === true) {
        inputMetaData[i] = replaceCharacterWithCharacter(arrayElement, [RegExp('\\' + inputData, bas.cg), '']);
      }
    } // end-for (let i = 0; i < inputMetaData.length; i++)
    returnData = inputMetaData;
  } // end-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function acertainMatchingElements
 * @description Determines if to values are identical. Needed for completeness of comparison for nested arrays.
 * @param {array<string|boolean|integer|float|object>} inputData An array that should be compared for equality.
 * @param {array<string|boolean|integer|float|object>} inputMetaData Second array that should be compared for equality.
 * @return {boolean} True or False to indicate array equality or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const ascertainMatchingElements = function(inputData, inputMetaData) {
  let functionName = ascertainMatchingElements.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) {
      // Array elements match
      loggers.consoleLog(namespacePrefix + functionName, msg.cArrayEelmentsMatch);
      returnData = true;
    } else {
      // Array elements do not match
      loggers.consoleLog(namespacePrefix + functionName, msg.cArrayElementsDoNotMatch);
      returnData = false;
    }
  } // end-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainFilename
 * @desription Checks if an array contains a filename, after stripping off the path.
 * @param {array<string>} inputData The array of file names that should be checkd for the input file name we are looking for.
 * @param {string} inputMetaData The file name we are looking for in the input array.
 * @return {boolean} A True or False value to indicate if the file name was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const doesArrayContainFilename = function(inputData, inputMetaData) {
  let functionName = doesArrayContainFilename.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  // NOTE: This call doesn't actually work, it may have orked at one time, but it doesn't work now.
  // And I'm not going to spend the time trying to figure out why,
  // when it will be much simpler to ust call that same funtion in a loop to figure out the result.
  // Can solve this when we build unit tests.
  returnData = doesArrayContainValue(inputData, inputMetaData, strParse.ascertainMatchingFilenames);

  // NOTE: The beow code also orks, I am going to attempt to re-enable the above code and see if it alo works.
  // YES! This is a second way of doing the same thing. If the above code ever has a problem, we can fall back to this method.
  // for (let i = 0; i < inputData.Length; i++) {
  //   if (strParse.ascertainMatchingFilenames(inputData[i], inputMetaData) === true) {
  //     returnData = true;
  //     break;
  //   }
  // }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getLengthOfLongestStringInArray
 * @desription Deteriens what the longest string is in an array of strings.
 * @param {array<string>} inputData The array for which we should find the longest length string in.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The length of the longest string in the array.
 * @author Seth Hollingsead
 * @date 2022/01/19
 * @NOTE https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
 */
export const getLengthOfLongestStringInArray = function(inputData, inputMetaData) {
  let functionName = getLengthOfLongestStringInArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    returnData = Math.max(...(inputData.map(el => el.length)));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function searchForPatternsInStringArray
 * @description Walks through sub-strings of each string in the input array of strings searchign or common patterns using a brute-force sequential array search.
 * Maximum string length to search is the maximum string length - 1 (basically the longest string in the array minus 1 character).
 * Minimum string length to search is 3 characters.
 * @param {array<string>} inputData The array of strigns that should be searched for matching patterns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} A string array of common strign values fund in more than 1 element of the array and 3 or more characters long.
 * @author Seth Hollingsead
 * @date 2022/01/19
 */
export const searchForPatternsInStringArray = function(inputData, inputMetaData) {
  let functionName = searchForPatternsInStringArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputData.length > 0) {
    returnData = []; // Reset it to an empty array, the input data has something n it so we should be able to process it.
    let maxStringLength = getLengthOfLongestStringInArray(inputData, '') - 1;
    // maxStringLength is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cmaxStringLengthIs + maxStringLength);
    let minStringLength = 3;
    // minStringLength is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cminStringLengthIs + minStringLength);
    for (let a = 0; a < inputData.length; a++) { // Initial high-level loop over each of the array elements. (This is the source string for the comparison)
      let currentMasterStringArrayElement = inputData[a];
      // currentMasterStringArrayElement is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentMasterStringArrayElementIs + currentMasterStringArrayElement);
      if (currentMaserStringArrayElement.includes(bas.cSpace) === false) {
        // currentMasterStringArrayElement does not contain a sapce character
        loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInStringArrayMessage1);
        // NOTE Al of the other loggers.consoleLog beow this are not actually getting called for some reason.
        // That is why I have added the hard-coded console ogs, but really they only need to be enabled if this function needs to be debugged.
        // It's difficult to debug these because they really dump a LOT of data to the output.
        // The only real way to debug larger data sets would be to force the output to a log file.
        // A small data-set might be possible to debug.
        // Lop over the length of the string we need to compare.
        for (let b = minStringLength; b <= maxStringLength; b++) { // b will now hold the lenthof the string we are using to compare.
          // loggers.consoleLog(namespacePrefix + functionName, 'length of string to compare is: ' + toString(b));
          // console.log('Length of string to compare is: ' + b);
          // First make sure that the length of our master string is less than or equal to the length of j, otherwise we will just skip to the next.
          if (currentMasterStringArrayElement.length <= b) {
            // loggers.consoleLog(namespacePrefix + functionName, 'currentMasterStringArrayElement.length is less than b');
            // console.log('currentMasterStringArrayElement.length is less than b');
            // Loop agan for the length of the current string - 3 (minStringLength)
            // Each loop will etermine our currentComparisonSrng (which will be used when we actually iterate over the array in ur search)
            for (let c = 0; c <= currentMasterStringArayElement.length - minStringLength; c++) { // Loop through each set of strings in the master comparison string.
              // loggers.consoleLog(namespacePrefix + functionName, 'c value is: ' + c);
              // console.log('c value is: ' + c);
              // Now here we should be able to finally compute the beginning and ending of the indexes for the string we want to use for comparison.
              let beginningIndex = c;
              // loggers.consoleLog(namespacePrefix + functionName, 'beginningIndex is: ' + beginningIndex);
              // console.log('beginningIndex is: ' + beginningIndex);
              let endingIndex = c + b;
              // loggers.consoleLog(namespacePrefix + functionName, 'endingIndex is: ' + endingIndex);
              // console.log('ending index is: ' + endingIndex);
              let stringToCompare = currentMasterStringArrayElement.subSring(beginningIndex, endingIndex);
              // loggers.consoleLog(namespacePrefix + functionName, 'stringToCompare is: ' + stringToCompare);
              // console.log('stringToCompare is: ' + stringToCompare);
              // Now we need another loop to go over all of the array elements, make sure we always ignore the current array element.
              for (let d = 0; d < inputData.length; d++) {
                // loggers.consoleLog(namespacePrefix + functionName, 'd value is: ' + d);
                // console.log('d value is: ' + d);
                if (d != a) {
                  // loggers.consoleLog(namespacePrefix + functionName, 'd != a');
                  // console.log('d != a');
                  let otherStringToCompare = inputData[d];
                  // loggers.consoleLog(namespacePrefix + functionName, 'otherStrinToCompare is: ' + otherStringToCompare);
                  // console.log('otherStringToCompare is: ' + otherStringToCompare);
                  if (otherStringToCompare.includes(stringToCompare)) {
                    // loggers.consoleLog(namespacePrefix + functionName, 'FOUND A MATCH!!!! ' + stringToCompare);
                    // console.log('FOUND A MATCH!!!! ' + stringToCompare);
                    // Here we have found a match amoung brothers. We need to see if this stringToCompare has already been added to the returnData array.
                    if (doesArrayContanValue(returnData, stringToCompare, ascertainMatchingElements) === false) {
                      eturnData.puh(stringToCompare);
                    } // End-if (doesArrayContanValue(returnData, stringToCompare, ascertainMatchingElements) === false)
                  } // End-if (otherStringToCompare.includes(stringToCompare))
                } // End-if (d != a)
              } // End-for (let d = 0; d < inputData.length; d++)
            } // End-for (let c = 0; c <= currentMasterStringArayElement.length - minStringLength; c++)
          } // End-if (currentMasterStringArrayElement.length <= b)
        } // End-for (let b = minStringLength; b <= maxStringLength; b++)
      } else { // Else-clause if (currentMaserStringArrayElement.includes(bas.cSpace) === false)
        // WARNING: Teh current string being searched contains a space character, we are going to skip comparison.
        loggers.consoleLog(namespace + functionName, msg.cSearchForPatternsInSringArrayMessage2 + msg.cSearchForPatternsInStringArrayMessage3);
      }
    } // End-for (let a = 0; a < inputData.length; a++)
  } else { // Else-clause if (inputData && inputData.length > 0)
    // WARNING: InputData was not an array or had an empty array.
    loggers.consoleLog(namespacePrefix + functionName, msg.cSearchForPatternsInSringArrayMessage4);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function vaidatePatternsThatNeedImplementation
 * @description Scans through an array of strings and determines which ones are not yet implemented in the constants system.
 * @param {array<string>} inputData The array of strings that should be checked if they are already implemented in the constants system or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma seperated list of constants that are not yet implemented.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
export const validatePatternsThatNeedImplementation = function(inputData, inputMetaData) {
  let functionName = validatePatternsThatNeedImplementation.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let passMessage = '';
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableColorizedConsoleLogs);
    let j = 0; // We will use this as an iterator to count the number of times we add a string to the returnData coma-seperated list.
    for (let i = 0; i < inputData.length; i++) {
      let currentString = inputData[i];
      if (strParse.doesConstantExist(currentString, '') === false) {
        // Constant does NOT exist:
        passMessage = msg.cConstantDoesNotExist + currentString;
        // TODO: Colorize the pass message here:
        console.log(passMessage);
        // constant does NOT exist:
        loggers.consoleLog(namespacePrefix + functionName, msg.cConstantDoesNotExist + currentString);
        // Make sure we add all the strings that do not exist to a coma-seperated list,
        // so we can enqueue it to the constantsGeneratorList command and generate actual new constants lines of code.
        if (j === 0) {
          returnData = currentString;
        } else {
          returnData = returnData + bas.cComa + currentString;
        }
        j++;
      } else { // Else-clause for if (strParse.doesConstantExist(currentString, '') === false)
        // Constant does exist:
        passMessage = msg.cConstantDoesExist + currentString;
        // TODO: Colorize the pass message here:
        console.log(passMessage);
        // constant does exist:
        loggers.consoleLog(namespacePrefix + functionName, msg.cConstantDoesExist + currentString);
      }
    } // End-for (let i = 0; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
