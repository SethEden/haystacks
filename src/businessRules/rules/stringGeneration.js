/**
 * @file stringGeneration.js
 * @module stringGeneration
 * @description Contains all business rules for randomly generating strings of all kinds.
 * @requires module:arrayParsing
 * @requires module:characterGeneration
 * @requires module:stringParsingUtilities
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/01/25
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import arrayParsing from './arrayParsing.js';
import characterGeneration from './characterGeneration.js';
import stringParsingUtilities from './stringParsingUtilities.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringGeneration.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function generateRandomMixedCaseTextByLength
 * @description Parse the input string, and determine how many mixed case
 * english alphaetic characters should be generated,
 * generate them and string them together.
 * @param {string} inputData The string that contains a number or how many
 * randomly generated mixed case alphabetic characters shoudl be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters where the
 * length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomMixedCaseTextByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomMixedCaseTextByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(inputData, inputMetaData));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseTextByLength
 * @description Parse the input string, and determine how many upper case
 * english alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly
 * generated upper case english alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters where the
 * length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomUpperCaseTextByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomUpperCaseTextByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateUpperCaseLetter(inputData, inputMetaData));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseTextByLength
 * @description Parse the input string, and determine how many lower case
 * english alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly
 * generated lower case english alphabetic characters taht should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters where the
 * length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomLowerCaseTextByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomLowerCaseTextByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateLowerCaseLetter(inputData, inputMetaData));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomMixedCaseTextWithSpecialCharactersByLength
 * @description Generate teh specified number of random mixed case letters and/or
 * special characters and string them together.
 * @param {string} inputData The number of randomly generated ixed case letters and/or
 * special characters to generate the output string.
 * @param {string} inputMetaData The ist of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case letters and
 * special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomMixedCaseTextWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomMixedCaseTextWithSpecialCharactersByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseTextWithSpecialCharactersByLength
 * @description Generate the specified number of random upper cae letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated upper case english letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generate process.
 * @return {string} A string of randomly generated upper case english letters and
 * special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomUpperCaseTextWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomUpperCaseTextWithSpecialCharactersByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseTextWithSpecialCharactersByLength
 * @description Generate the specified number of random lower case english letters and/or
 * special characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or
 * special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be
 * used during the generation process.
 * @return {string} A string of randomly generated lower case english letters and
 * special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomLowerCaseTextWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomLowerCaseTextWithSpecialCharactersByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomMixedCaseAlphaNumericCodeByLength
 * @description Generate the specified number of random mixed case english letters and/or
 * numeric characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or
 * numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case english letters and
 * numbers where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomMixedCaseAlphaNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomMixedCaseAlphaNumericCodeByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter('', ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseAlphaNumericCodeByLength
 * @description Generate the specified number of random upper case english letters and/or
 * numeric characters and string them together.
 * @param {string} inputData The string that contains a number for how many randomly
 * generated upper case english letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case english letters and numbers
 * where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomUpperCaseAlphaNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomUpperCaseAlphaNumericCodeByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter('', ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseAlphaNumericCodeByLength
 * @description Generate the specified number of random lower case english letters and/or
 * numeric characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or
 * numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case english letters and
 * numbers wehre the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomLowerCaseAlphaNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomLowerCaseAlphaNumericCodeByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter('', ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomNumericCodeByLength
 * @description Generate the specified number of random numeric characters and string them together.
 * @param {string} inputData The number of randomly generated numeric characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated numeric characters wehre the
 * length of the string is defned by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomNumericCodeByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateNumericCharacter('', ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Generate a random selection of mixed case english letters,
 * numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated english letters,
 * numeric characters and special characters that should  be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case alpha numeric characters,
 * and special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Generate a random selection of upper case english letters,
 * numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them togetehr to the specified length.
 * @param {string} inputData The number of randomly generated upper case english letters,
 * numeric characters and special characters that should be generated.
 * @param {string} inputMetaData Teh list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated upper case alpha numeric characters,
 * and special characters where the length of the string is defined as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Generate a random selection of lower case english letters,
 * numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated lower case english letters,
 * numeric characters adn special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case alpha numeric characters,
 * and special characters wehre the length of the string is defned as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomSpecialCharacterCodeByLength
 * @description Generate a random selection of characters from the input allowable alphabet of characters,
 * generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated special characters that should be generated.
 * @param {string} inputMetaData The ist of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated characters from the list of
 * allowable special characters that are passed in where the length of the string is defined as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomSpecialCharacterCodeByLength = function(inputData, inputMetaData) {
  let functionName = generateRandomSpecialCharacterCodeByLength.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let numberOfCharactersToGenerate = parseInt(inputData);
    for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(characterGeneration.randomlyGenerateSpecialCharacter(inputMetaData, ''));
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateVaidEmail
 * @description Generate a valid random email address composed of a random selection of
 * mixed case english letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated;
 * generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData An array map with multiple input parameters.
 * inputMetaData[0] = generateSpecialCharacters - A boolean value to indiate if
 * special characters should be included when randomlygenerating characters for the output string.
 * inputMetaData[1] = allowableSpecialCharacters - The list of allowable special characters as a string,
 * only used if the {@code generateSpecialCharacters} boolena value is set to {@code TRUE}.
 * inputMetaData[2] = specifiedSuffiAndDomain - The specified suffix and domain to
 * use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: a@b.com".
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateValidEmail = function(inputData, inputMetaData) {
  let functionName = generateValidEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  let allowableSpecialCharacters;
  let generateSpecialCharacters;
  let specifiedSuffixAndDomain;
  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = stringParsingUtilities.stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2];
      // NOTE: The above function stringParsingUtilities.stringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but ony if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateValidEmailWithSpecificSuffixAndDomainName(inputData, generateSpecialCharacters,
        allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = stringParsingUtilities.stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      // NOTE: The above function stringParsingUtilities.stringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateRandomValidEmail(inputData, generateSpecialCharacters, allowableSpecialCharacters);
    } else {
      returnData = generateRandomValidEmail(inputData, bas.cFalse, wrd.cEmpty);
    }
  } else { // Else-clause if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '')
    returnData = generateRandomValidEmail(inputData, bas.cFalse, wrd.cEmpty);
  } // End-else-clause if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '')
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateInvalidEmail
 * @description Generate an invalid random email address composed of a random selection of mixed case english letters,
 * numeric characters adn optionally special characters from an optional list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData An array map with multiple input parameters:
 * inputMetaData[0] = generateSpecialCharacters - A boolean value to indicate if special characters should be
 * included when ranomly generating characters for the output string.
 * inputMetaData[1] = allowableSpecialCharacters - The list of allowable special characters as a string,
 * only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 * inputMetaData[2] = specifiedSuffixAndDomain - The specified suffix and domain to use
 * after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string}A string of randomly generated mixed case alpha numeric characters and
 * optionally special characters where the length of the string is also defined as one
 * of the input parameters, formatted as an email: "a@b.com".
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateInvalidEmail = function(inputData, inputMetaData) {
  let functionName = generateInvalidEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  let allowableSpecialCharacters;
  let generateSpecialCharacters;
  let specifiedSuffixAndDomain;
  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = stringParsingUtilities.stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2];
      // @NOTE The above function stringParsingUtilities.stringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but ony if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateInvalidEmailWithSpecificSuffixAndDomainName(inputData, generateSpecialCharacters,
        allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = stringParsingUtilities.stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      // @NOTE The above function stringParsingUtilities.stringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but ony if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateRandomInvalidEmail(inputData, generateSpecialCharacters, allowableSpecialCharacters);
    } else {
      returnData = generateRandomInvalidEmail(inputData, [bas.cFalse, wrd.cEmpty]);
    }
  } else {
    returnData = generateRandomInvalidEmail(inputData, [bas.cFalse, wrd.cEmpty]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateValidEmailWithSpecificSuffixAndDomainName
 * @description Generate a valid email composed of a random selection of mixed case english letters,
 * numeric characters and optionally special characters from an optional list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A boolean value to indicate if special characters should be
 * included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string,
 * only sued if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in
 * the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not
 * exceed the {@code numberOfCharactersTogenerate + 2} or the function/rule will return an empty string.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateValidEmailWithSpecificSuffixAndDomainName = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  let functionName = generateValidEmailWithSpecificSuffixAndDomainName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);
  loggers.consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);
  loggers.consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);
  loggers.consoleLog(namespacePrefix + functionName, msg.cspecifiedSuffixAndDomainIs + specifiedSuffixAndDomain);
  let returnData = '';
  let prefix = '';
  if ((numberOfCharactersToGenerate >= specifiedSuffixAndDomain.length + 2) && numberOfCharactersToGenerate >= 6 &&
  specifiedSuffixAndDomain.includes(bas.cDot)) {
    // @NOTE we cannot have less then 6 characters, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters ust be generated....and the "." should have already been passed in.
    // First need to figure out how many characters of each we must generate to et the desired final length.
    //
    // So lets reove the characters that we know we are already ging to be reserved, the "@" symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfCharactersToGenerate, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfCharactersToGenerate, allowableSpecialCharacters);
    }
    returnData = prefix + bas.cAt + specifiedSuffixAndDomain;
  } else {
    returnData = '';
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomValidEmail
 * @description Generate a valid email composed of a random selection of mixed case english letters,
 * numeric characters and  optional special characters from an optional list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate Teh number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A boolean value to indicate if special characters should
 * be included when randomly generatign characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string,
 only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated  mixed case alpha numeric characters adn optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomValidEmail = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  let functionName = generateRandomValidEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);
  loggers.consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);
  loggers.consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);
  let returnData = '';
  let prefix = '';
  let suffix = '';
  let domainName = '';
  let numberOfPrefixcharacters = 0;
  let numberOfSuffixCharacters = 0;
  if (numberOfCharactersToGenerate >= 6) {
    // @NOTE We cannot have less than 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // first need to figure out how many characters of each we must generate to get the desired file length.
    //
    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;

    // Consider that the number of characters in the domain must be either 2 or 3. (according to IpV5, IpV6 is a whole other ball of wax!!)
    // So let us first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
    if (numberOfCharactersToGenerate === 4) { // Stick wtih a 2-character domain name.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength(num.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c2, allowableSpecialCharacters);
      }
    } else if (numberOfCharactersToGenerate >= 5) {
      // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
      // but we need to decide now so we can get it done and be fair.
      // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
      if (characterGeneration.randomlyGenerateBooleanValue('', '') === true) { // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength(num.c2, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c2, allowableSpecialCharacters);
        }
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
      } else { // Do a 3-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength(num.c3, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c3, allowableSpecialCharacters);
        }
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 3;
      }
    } else {
      // @NOTE We should never actually get here, because the {@code numberOfCharactersToGenerate} cannot be less than 6 and 6-2 must be >=4.
      // Just generate the minimum domain and try to proceed as best as possible as a matter of completeness of the code.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength(num.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c2, allowableSpecialCharacters);
      }
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    }

    // Remaining number of characters that we must provide to the e-mail must be divided by 2, or the prefix and suffix.
    if (numberOfCharactersToGenerate % 2 === 0) {
      // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
      numberOfPrefixcharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixcharacters;
    } else if (numberOfCharactersToGenerate % 2 === 1) {
      numberOfPrefixcharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixcharacters - 1;
    } else { // Should also neer get here, as all numbers are either divisible by 2 or not with a remainder of 1.
      // Just do somethign to see if we can survive, again as a matter of completeness of code logic.
      numberOfPrefixcharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixcharacters;
    }

    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixcharacters, '');
      suffix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfSuffixCharacters, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfPrefixcharacters, allowableSpecialCharacters);
      suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfSuffixCharacters, allowableSpecialCharacters);
    }
    returnData = prefix + bas.cAt + suffix + bas.cDot + domainName;
  } else {
    returnData = '';
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateInvalidEmailWithSpecificSuffixAndDomainName
 * @description Generate an invalid email composed of a random selection of mixed case english letters,
 * numeric characters and optionall special characters from an optional list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A boolean value to indicate if special characters should be
 * included when randomly generating characters fro the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string,
 * only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use
 * after the "@" symbol n the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally
 * special characters where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not
 * exceed the {@code numberOfCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateInvalidEmailWithSpecificSuffixAndDomainName = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  let functionName = generateInvalidEmailWithSpecificSuffixAndDomainName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);
  loggers.consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);
  loggers.consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);
  loggers.consoleLog(namespacePrefix + functionName, msg.cspecifiedSuffixAndDomainIs + specifiedSuffixAndDomain);
  let returnData = '';
  let prefix = '';
  let numberOfPrefixCharacters = 0;
  let failureMode = -1;
  // NOTE: Cannot have a "." as part of a variable name in a {set}.
  failureMode = characterGeneration.randomlyGenerateNumberInRange(num.c1, [num.c3, gen.cTrue, gen.cTrue]);
  // failureMode is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfailureModeIs + failureMode);
  // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the prefix
  // 3 - Without the "@" & Prefix
  // NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases,
  // I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or just leverage the faker tool, which also has a way to generate fake emails.
  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have elss then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // First we need to figure out how many characters of each we must generate to get the desired final length.
    switch (failureMode) {
      case 1: case num.c1:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - (specifiedSuffixAndDomain.length + 1);
        break;
      case 2: case num.c2:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
        break;
      case 3: case num.c3:
        numberOfCharactersToGenerate = 0;
        break;
      default:
        numberOfCharactersToGenerate = 0;
        break;
    } // End-switch (failureMode)

    // This a pretty dumb and stupid way of doing it, but we only have 3 failure modes for this rule.
    // There are basically with and without the prefix, and we've refactored in all the other cases already above.
    numberOfPrefixCharacters = numberOfCharactersToGenerate;
    // numberOfCharactersToGenerate is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    } // End-if (numberOfPrefixCharacters > 0)

    // prefix is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cprefixIs + prefix);

    switch (failureMode) {
      case 1: case num.c1: // Without the @ symbol.
        loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbol);
        returnData = prefix + specifiedSuffixAndDomain;
        break;
      case 2: case num.c2: // Without the prefix.
        loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefix);
        returnData = bas.cAt + specifiedSuffixAndDomain;
        break;
      case 3: case num.c3: // Without the @ and prefix.
        loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndPrefix);
        returnData = specifiedSuffixAndDomain;
        break;
      default: // DEFAULT: Without the @ and prefix
        loggers.consoleLog(namespacePrefix + functionName, msg.cDEFAULTWithoutTheAtSymbolAndPrefix);
        returnData = specifiedSuffixAndDomain;
        break;
    } // End-switch (failureMode)
  } // End-if (numberOfCharactersToGenerate >= 6)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomInvalidEmail
 * @description Generate an invalid email composed of a random selection of mixed case english letters,
 * numeric characters and optional special characters from an optional list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A boolean value to indicate if special characters should be
 * included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The ist of allowable special characters as a string,
 * only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defned as one of the input parameters, formatted as an email "a@b.com".
 * @author Seth Hollingsead
 * @date 2022/01/26
 */
const generateRandomInvalidEmail = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  let functionName = generateRandomInvalidEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);
  loggers.consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);
  loggers.consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);
  let returnData = '';
  let prefix = '';
  let suffix = '';
  let domainName = '';
  let numberOfPrefixCharacters = 0;
  let numberOfSuffixCharacters = 0;
  let numberOfDomainNameCharacters = 0;
  let failureMode = -1;
  // NOTE Cannot have a "." as part of a variable name in a {set}.
  failureMode = characterGeneration.randomlyGenerateNumberInRange(num.c1, [num.c28 + gen.cTrue, gen.cTrue]);
  failureMode = parseInt(failureMode);
  // failureMode is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfailureModeIs + failureMode);
  // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the "." symbol
  // 3 - Without both the "@" & "." symbols
  // 4 - Without the domain name
  // 5 - Without the "@" & domain name
  // 6 - Without the "." & domain name
  // 7 - Without the "@", "." & domain name
  // 8 - Without the prefix
  // 9 - Without the suffix
  // 10- Without the "@" & Prefix
  // 11- Without the "." & Prefix
  // 12- Without the "@" & Suffix
  // 13- Without the "." & Suffix
  // 14- Without the "@", "." & Prefix
  // 15- Without the "@", "." & Suffix
  // 16- Without the "@", ".", Prefix, & Suffix
  // 17- Without the Prefix & domain name
  // 18- Without the Suffix & domain name
  // 19- Without the Prefix & Suffix
  // 20- Without the Prefix, Suffix & domain name
  // 21- Without the "@", Prefix & domain name
  // 22- Without the ".", Prefix & domain name
  // 23- Without the "@", Suffix & domain name
  // 24- Without the ".", Suffix & domain name
  // 25- Without the "@", Prefix, Suffix & domain name
  // 26- Without the ".", Prefix, Suffix & domain name
  // 27- Without the Prefix, Suffix & "@"
  // 28- Without the Prefix, Suffix & "."

  // NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // the logic below is pretty much full-proof and  will likely not need editing. If you need to handle additional special use cases,
  // I suggest you invent your own email generation function/rule.
  // Feel free to use this  one as a reference as to how to do it, or just leverage teh faker tool, which also has a way to generate fake emails.
  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have elss than 6, because an email address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest fo the characters must be geenrated.
    // first need to figure out how many characters of each we must geenrate to get the desired final length.

    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol, according to the failure mode.
    if (failureMode === 1 || failureMode === 2 || failureMode === 5 || failureMode === 6 ||
    failureMode === 10 || failureMode === 11 || failureMode == 12 || failureMode === 13 || failureMode >= 21 ) {
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    } else if (failureMode === 3 || failureMode === 7 || failureMode === 14 || failureMode === 15 || failureMode === 16) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    }
    // numberOfCharactersToGenerate is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

    // Only work generating the domain name if we are not going to be building our invalid email on a missing domain name.
    if (failureMode === 1 || failureMode === 2 || failureMode === 3 || (failureMode >= 8 && failureMode <= 16) || failureMode === 19 || failureMode > 27) {
      // Consider that the number of cahracters in the domain must be either 2 or 3 (according to IpV5, I'm not going to even try touchign IpV6!!)
      // So lets first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
      if (numberOfCharactersToGenerate === 4) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength(num.c2, '');
        } else {
          if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
            domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c2, allowableSpecialCharacters);
          } else {
            domainName = generateRandomMixedCaseTextByLength(num.c2, '');
          }
        }
        numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
      } else if (numberOfCharactersToGenerate >= 5) {
        // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
        // but we need to decide now so we can get it done and be fair.
        // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
        if (characterGeneration.randomlyGenerateBooleanValue('','') === true) { // Stick with a 2-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength(num.c2, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c2, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength(num.c2, '');
            }
          }
          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
        } else { // Do a 3-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength(num.c3, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(num.c3, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength(num.c3, '');
            }
          }
          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 3
        }
      } // End-else-if (numberOfCharactersToGenerate >= 5)
    } // End-if (failureMode === 1 || failureMode === 2 || failureMode === 3 || (failureMode >= 8 && failureMode <= 16) || failureMode === 19 || failureMode > 27)
    // domainName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdomainNameIs + domainName);

    // ONLY do suffix and prefix if our failure modes do not exclude both.
    if (failureMode >= 1 && failureMode <= 7) {
      // Remaining number of characters that we must provide to the e-mail must be divided by 2, for the prefix and suffix.
      if (numberOfCharactersToGenerate % 2 === 0) {
        // We have a number that is divisible by 2, so just divide it and
        // that will be the number of characters we use for both the prefix and suffix.
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters;
      } else if (numberOfCharactersToGenerate % 2 === 1) {
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
      }
    } else if (failureMode === 8 || failureMode === 10 || failureMode === 11 || failureMode === 14 || failureMode === 17 || failureMode === 21 || failureMode === 22) {
      // Excluding the Prefix
      numberOfSuffixCharacters = numberOfCharactersToGenerate; // Suffix get the remainder!
      numberOfPrefixCharacters = 0;
    } else if (failureMode === 9 || failureMode === 12 || failureMode === 13 || failureMode === 15 || failureMode === 18 || failureMode === 23 || failureMode === 24) {
      // Excluding the Suffix
      numberOfPrefixCharacters = numberOfCharactersToGenerate; // Prefix gets the remainder!
      numberOfSuffixCharacters = 0;
    }
    // numberOfPrefixCharacters is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfPrefixCharactersIs + numberOfPrefixCharacters);
    // numberOfSuffixCharacters is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfSuffixCharactersIs + numberOfSuffixCharacters);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          prefix = geenrateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
        } else {
          prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters.toString(), '');
        }
      }
    } // End-if (numberOfPrefixCharacters > 0)
    // prefix is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cprefixIs + prefix);

    if (numberOfSuffixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        suffix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfSuffixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfSuffixCharacters.toString(), allowableSpecialCharacters);
        } else {
          suffix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfSuffixCharacters.toString(), '');
        }
      }
    } // End-if (numberOfSuffixCharacters > 0)
    // suffix is:
    loggers.consoleLog(namespacePrefix + functionName, msg.csuffixIs + suffix);
  } // End-if (numberOfCharactersToGenerate >= 6)

  switch (failureMode) {
    case 1: // Without the @ symbol.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbol);
      returnData = prefix + suffix + bas.cDot + domainName;
      break;
    case 2: // Without the . symbol.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotSymbol);
      returnData = prefix + bas.cAt + suffix + domainName;
      break;
    case 3: // Without bot the @ and . symbols
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtAndDotSymbols);
      returnData = prefix + suffix + domainName;
      break;
    case 4: // Without the domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDomainName);
      returnData = prefix + bas.cAt + suffix + bas.cDot;
      break;
    case 5: // Without the @ and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndDomainName);
      returnData = prefix + suffix + bas.cDot + domainName;
      break;
    case 6: // Without the . and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndDomainName);
      returnData = prefix + bas.cAt + suffix;
      break;
    case 7: // Without the @, . and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndDomainName);
      returnData = prefix + suffix;
      break;
    case 8: // Without the prefix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefix);
      returnData = bas.cAt + suffix + bas.cDot + domainName;
      break;
    case 9: // Without the suffix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheSuffix);
      returnData = prefix + bas.cAt + bas.cDot + domainName;
      break;
    case 10: // Without the @ and prefix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndPrefix);
      returnData = suffix + bas.cDot + domainName;
      break;
    case 11: // Without the . and prefix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndPrefix);
      returnData = bas.cAt + suffix + domainName;
      break;
    case 12: // Without the @ and suffix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndSuffix);
      returnData = prefix + bas.cDot + domainName;
      break;
    case 13: // Without the . and suffix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndSuffix);
      returnData = prefix + bas.cAt + domainName;
      break;
    case 14: // Without the @, . and prefix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndPrefix);
      returnData = suffix + domainName;
      break;
    case 15: // Without the @, . and suffix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndSuffix);
      returnData = prefix + domainName;
      break;
    case 16: // Without the @, ., prefix, and suffix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotPrefixAndSuffix);
      returnData = domainName;
      break;
    case 17: // Without the prefix and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixAndDomainName);
      returnData = bas.cAt + suffix + bas.cDot;
      break;
    case 18: // Without the suffix and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheSuffixAndDomainName);
      returnData = prefix + bas.cAt + bas.cDot;
      break;
    case 19: // Without the prefix and  suffix.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixAndSuffix);
      returnData = bas.cAt + bas.cDot + domainName;
      break;
    case 20: // Without the prefix, suffix and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndDomainName);
      returnData = bas.cAt + bas.cDot;
      break;
    case 21: // Without the @, prefix and  domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolPrefixAndDomainName);
      returnData = suffix + bas.cDot;
      break;
    case 22: // Without the ., prefix and  domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotPrefixAndDomainName);
      returnData = bas.cAt + suffix;
      break;
    case 23: // Without the @, suffix and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolSuffixAndDomainName);
      returnData = prefix + bas.cDot;
      break;
    case 24: // Without the ., suffix and domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotSuffixAndDomainName);
      returnData = prefix + bas.cAt + bas.cDot;
      break;
    case 25: // Without the @, prefix, suffix and  domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolPrefixSuffixAndDomainName);
      returnData = bas.cDot;
      break;
    case 26: // Without the ., prefix, suffix and  domain name.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithutTheDotPrefixSuffixAndDomainName);
      returnData = bas.cAt;
      break;
    case 27: // Without the prefix, suffix and @.
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndAtSymbol);
      returnData = bas.cDot + domainName;
      break;
    case 28: // Without the prefix, suffix and ..
      loggers.consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndDot);
      returnData = bas.cAt + domainName;
      break;
  } // End-switch (failureMode)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomBrightColor
 * @description Generates a randomset of RGB values in the bright color spectrum range.
 * Originally I thought to generate just a bright color, but dividing the spectrum straight in half resulted in mostly drab colors.
 * So I adjusted this function to use the inputs to provide a narrow range of bright values that can be generated.
 * This makes the function nearly identical to the same function that generates random dark colors.
 * Really the only difference is the default values. So this function is refactored to call a generic random color generator business rule.
 * @param {string|integer} inputData The number in either numeric or string format that represents the minimum range that should be used to generate the random color.
 * @param {string|integer} inputMetaData The number in either numeric or string format that represents the maximum range that should be used to generate the random color.
 * @return {array<integer,integer,integer>} An array of RGB values in the bright color spectrum range.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
const generateRandomBrightColor = function(inputData, inputMetaData) {
  let functionName = generateRandomBrightColor.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [255,255,255];
  let minimumColorRange = 127;
  let maximumColorRange = 255;
  let parsedColorRangeArray = [];
  if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
    // Try to parse them as numbers for the range.
    parsedColorRangeArray = arrayParsing.parseColorRangeInputs(inputData, inputMetaData);
    minimumColorRange = parsedColorRangeArray[0];
    maximumColorRange = parsedColorRangeArray[1];
  } // End-if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '')
  returnData = generateRandomColor(minimumColorRange, maximumColorRange);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomDarkColor
 * @description Generates a random set of RGB values in the dark color spectrum range.
 * Originally I thought to generate just a dark coor, but dividing the spectrum straight in half resulted in mostly drab colors.
 * So I adjusted this function to use the inputs to provide a narrow range of dark values that can be generated.
 * This makes the function nearly identical to the same function that generates random bright colors.
 * Really the only difference is the default values. So this function is refactored to call a generic random coor generator business rule.
 * @param {string|integer} inputData The number in either numeric or string format that represents the minimum range that should be used to generate the random color.
 * @param {string|integer} inputMetaData The number in either numeric or string format that represents the maximum range that should be used to generate the random color.
 * @return {array<integer,integer,integer>} An array of RGB values in the dark color spectrum range.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
const generateRandomDarkColor = function(inputData, inputMetaData) {
  let functionName = generateRandomDarkColor.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [0,0,0];
  let minimumColorRange = 0;
  let maximumColorRange = 127;
  let parsedColorRangeArray = [];
  if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
    // Try to parse them as numbers for the range.
    parsedColorRangeArray = arrayParsing.parseColorRangeInputs(inputData, inputMetaData);
    minimumColorRange = parsedColorRangeArray[0];
    maximumColorRnage = parsedColorRangeArray[1];
  } // End-if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '')
  returnData = generateRandomColor(minimumColorRange, maximumColorRange);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomColor
 * @description Generates a random set of RGB values in the given color range.
 * @param {string|integer} inputData The number in either numeric or string format that represents the minimum range that should be used to generate the random color.
 * @param {string|integer} inputMetaData The number in either numeric or string format that represents the maximum range that should be used to generate the random coor.
 * @return {array<integer,integer,integer>} An array of RGB values that will be used for a color value.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
const generateRandomColor = function(inputData, inputMetaData) {
  let functionName = generateRandomColor.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [0,0,0];
  let minimumColorRange = 0;
  let maximumColorRange = 255;
  let parsedColorRangeArray = [];
  if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
    // Try to parse them as numbers for the range.
    parsedColorRangeArray = arrayParsing.parseColorRangeInputs(inputData, inputMetaData);
    minimumColorRange = parsedColorRangeArray[0];
    maximumColorRange = parsedColorRangeArray[1];
  } // End-if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '')
  // minimumColorRange is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cminimumColorRangeIs + minimumColorRange);
  // maximumColorRange is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cmaximumColorRangeIs + maximumColorRange);
  returnData[0] = characterGeneration.randomlyGenerateNumberInRange(minimumColorRange.toString(), [maximumColorRange.toString(), gen.ctrue, gen.ctrue]); // Red
  returnData[1] = characterGeneration.randomlyGenerateNumberInRange(minimumColorRange.toString(), [maximumColorRange.toString(), gen.ctrue, gen.ctrue]); // Green
  returnData[2] = characterGeneration.randomlyGenerateNumberInRange(minimumColorRange.toString(), [maximumColorRange.toString(), gen.ctrue, gen.ctrue]); // Blue
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  generateRandomMixedCaseTextByLength,
  generateRandomUpperCaseTextByLength,
  generateRandomLowerCaseTextByLength,
  generateRandomMixedCaseTextWithSpecialCharactersByLength,
  generateRandomUpperCaseTextWithSpecialCharactersByLength,
  generateRandomLowerCaseTextWithSpecialCharactersByLength,
  generateRandomMixedCaseAlphaNumericCodeByLength,
  generateRandomUpperCaseAlphaNumericCodeByLength,
  generateRandomLowerCaseAlphaNumericCodeByLength,
  generateRandomNumericCodeByLength,
  generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength,
  generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength,
  generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength,
  generateRandomSpecialCharacterCodeByLength,
  generateValidEmail,
  generateInvalidEmail,
  generateRandomBrightColor,
  generateRandomDarkColor,
  generateRandomColor
};
