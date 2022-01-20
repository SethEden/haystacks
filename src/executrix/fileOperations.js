/**
 * @file fileOperations.js
 * @module fileOperations
 * @description Contains all of the functions required to do file operations
 * on a physical/virtual hard drive and/or mounted volume.
 * Including loading files, saving files, reloading files, resaving files,
 * copying files, moving files, copying folders including copying folders recursively,
 * zipping files and saving zip-packages as part of a deployment/release process.
 * @requires module:basic.constants
 * @requires module:function.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:word1.constants
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../constants/basic.constants');
let fnc = require('../constants/function.constants');
let gen = require('../constants/generic.constants');
let msg = require('../constants/message.constants');
let wr1 = require('../constants/word1.constants');
let loggers = require('../executrix/loggers');
let D = require('../structures/data');
let fs = require('fs');
let path = require('path');
let filesCollection = [];
const directoriesToSkip = ['browser_components', 'node_modules', 'www', 'platforms', 'Release', 'Documentation', 'Recycle', 'Trash'];
let enableFilesListLimit = false;
let filesListLimit = -1;
let hitFileLimit = false;
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = wr1.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getJsonData
 * @description Loads the specified file and parses it into a JSON object(s).
 * @param {string} pathAndFilename The path and file name of the JSON file that
 * should be loaded and parsed into JSON objects.
 * @return {object} The JSON object as it was loaded from the file with minimal to no additional processing.
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function getJsonData(pathAndFilename) {
  let functionName = getJsonData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`pathAndFilename is: ${pathAndFilename}`);
  // Make sure to resolve the path on the local system,
  // just in case tehre are issues with the OS that the code is running on.
  pathAndFilename = path.resolve(pathAndFilename);
  let rawData = fs.readFileSync(pathAndFilename, { encoding: gen.cUTF8});
  let parsedData = JSON.parse(rawData);
  // console.log(`DONE loading data from: ${pathAndFilename}`);
  // console.log(`loaded data is: ${JSON.stringify(parsedData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return parsedData;
};

/**
 * @function readDirectoryContents
 * @description This function acts as a wrapper for calling readDirectorySynchronously since that function is recursive.
 * Also taht function doesn't technically return anything, it works with a global variable that
 * needs to be reset after the work is done with it. So these are the things that this wrapper function can do.
 * @param {string} directory The path that needs to be scanned.
 * @return {object} An object containing any array of all the files in the folder and all sub-folders.
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function readDirectoryContents(directory) {
  let functionName = readDirectoryContents.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`directory is: ${directory}`);
  let filesFound = [];
  // Make sure to resolve the path on the local system,
  // just in case there are issues with the OS that the code is running on.
  directory = path.resolve(directory);
  readDirectorySynchronously(directory);
  filesFound = filesCollection; // Copy the data ino a local variable first.
  filesCollection = undefined; // Make sure to clear it so we don't have a chance of it corrupting any other file operations.
  filesCollection = [];
  // console.log(`filesFound is: ${JSON.stringify(filesFound)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return filesFound;
};

/**
 * @function readDirectorySynchronously
 * @description Recursively parses through all the sub-folders in a given path and loads all of the files contained in each sub-folder into a map.
 * @param {string} directory The system path that should be scanned recursively for files.
 * @return {object} A map of all the files contained in all levels of the specified path in all the folders and sub-folders.
 * @NOTE The function doesn't actually return anything, all the file data is stored in an external data collection.
 * @author wn050
 * @reference https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directores-nodejs
 * @date 2020/05/22
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function readDirectorySynchronously(directory) {
  let functionName = readDirectorySynchronously.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`directory is: ${directory}`);
  if (hitFileLimit === false) {
    directory = path.resolve(directory); // Make sure to resolve the path on the local system, just in case there are issues with the OS that the code is running on.
    let currentDirectoryPath = directory;
    let currentDirectory = '';
    try {
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    } catch (e) {
      console.log(msg.cERROR + e.message);
      fs.mkdirSync(currentDirectoryPath);
      currentDirectory = fs.readdirSync(currentDirectoryPath, gen.cUTF8);
    }
    currentDirectory.forEach(file => {
      let filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
      let pathOfCurrentItem = directory + bas.cForwardSlash + file;
      try {
        if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
          if (enableFilesListLimit === true && filesListLimit > 0) {
            if (filesCollection.length <= filesListLimit) {
              // console.log('Did not hit the file limit yet!');
              filesCollection.push(pathOfCurrentItem);
              // console.log('filesCollection is: ' + JSON.stringify(filesCollection));
            } else {
              // console.log('Hit the file limit!!');
              hitFileLimit = true;
              return;
            }
          } else {
            // console.log('Adding the file the old fashioned way.');
            filesCollection.push(pathOfCurrentItem);
          }
        } else if (!filesShouldBeSkipped) {
          // NOTE: There is a difference in how paths are handled in Windows VS Mac/Linux,
          // So for now I'm putting this code here like this to handle both situations.
          // The ideal solution would be to detect which OS the code is being run on.
          // Then handle each case appropriately.
          let directoryPath = '';
          directoryPath = path.resolve(directory + bas.cForwardSlash + file);
          // console.log(`directoryPath is: ${directoryPath}`);
          readDirectorySynchronously(directoryPath);
        }
      } catch (e) { // Catch the error in the hopes that we can continue scanning the file system.
        console.log(msg.cErrorInvalidAccessTo + pathOfCurrentItem);
      }
    });
    // console.log(`END ${namespacePrefix}${functionName} function`);
  }
};

/**
 * @function cleanRootPath
 * @description Takes the application root path and cleans it to give a real root path,
 * or top-level folder path for the application.
 * @return {string} The real root path or top-level path for the application.
 * @NOTE This has been problematic because often many of the init functions are contained in lower level folders,
 * not at the top-level. This gives much greater level of organization to the over all project and
 * helps wih scalability & reusability.
 * @author Seth Hollingsead
 * @date 2021/10/26
 */
function cleanRootPath() {
  let functionName = cleanRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let rootPath;

  loggers.consoleLog(namespacePrefix + functionName, msg.crootPathIs + rootPath);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`rootPath is: ${rootPath}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return rootPath;
};

/**
 * @function appendMessageToFile
 * @description Opens a file and appends a message to the file, then closes the file.
 * @param {string} file The fully qualified path and file name for the file that
 * should be opened, appended and saved.
 * @param {string} message The message that should be appended to the specified file.
 * @return {boolean} A TRUE or FALSE to indicate if the append happened successfully or not.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function appendMessageToFile(file, message) {
  let functionName = appendMessageToFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`file is: ${file}`);
  // console.log(`message is: ${message}`);
  let appendSuccess = false;
  if (file && message) {
    try {
      // console.log('open the file sync');
      fd = fs.openSync(file, bas.ca);
      // console.log('append to the file sync');
      fs.appendFileSync(fd, message + bas.cCarriageReturn + bas.cNewLine, gen.cUTF8);
      // console.log('DONE appending to the file');
    } catch (err) {
      return console.log(err);
    } finally {
      if (fd !== undefined) {
        fs.closeSync(fd);
      }
    }
  }
  // console.log(`appendSuccess is: ${appendSuccess}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return appendSuccess;
};

module.exports = {
  [fnc.cgetJsonData]: (pathAndFilename) => getJsonData(pathAndFilename),
  [fnc.creadDirectoryContents]: (directory) => readDirectoryContents(directory),
  [fnc.creadDirectorySynchronously]: (directory) => readDirectorySynchronously(directory),
  [fnc.cappendMessageToFile]: (file, message) => appendMessageToFile(file, message)
};
