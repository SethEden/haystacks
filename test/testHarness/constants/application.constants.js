/**
 * @file application.constants.js
 * @module application.constants
 * @description Contains many re-usable application constants.
 * @requires module.application.constant.constants
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.configuration.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let haystacks = require('haystacks');
let apcon = require('./application.constant.constants');
let bas = haystacks.bas;
let cfg = haystacks.cfg;
let wr1 = haystacks.wr1;

let cApplicationName = wr1.ctest + wr1.cHarness; // testHarness
let cAppPath = bas.cForwardSlash + wr1.ctest + bas.cForwardSlash + cApplicationName + bas.cForwardSlash; // "/test/testHarness/"
let cResourcesCommonPath = wr1.cresources + bas.cForwardSlash; // resources/
let cCommandsCommonPath = wr1.ccommands + bas.cForwardSlash; // commands/
let cConfigurationCommonPath = wr1.cconfiguration + bas.cForwardSlash; // configuration/
let cWorkflowsCommonPath = wr1.cworkflows + bas.cForwardSlash; // workflows/
let cReleasePath = wr1.crelease + bas.cForwardSlash; // release/
let cFullResourcesPath = cAppPath + cResourcesCommonPath; // /test/testHarness/resources/
let cFullCommandsPath = cFullResourcesPath + cCommandsCommonPath; // /test/testHarness/resources/commands/
let cFullConfigurationPath = cFullResourcesPath + cConfigurationCommonPath; // /test/testHarness/resources/configuration/
let cFullWorkflowsPath = cFullResourcesPath + cWorkflowsCommonPath; // /test/testHarness/resources/workflows/
let cmetaDataPath = cFullResourcesPath + cfg.cmetaDatadotJson; // /resources/metaData.json

module.exports = {
  [bas.cc + apcon.cApplicationName]: cApplicationName, // testHarness
  [bas.cc + apcon.cAppPath]: cAppPath, // "/test/testHarness/"
  [bas.cc + apcon.cResourcesCommonPath]: cResourcesCommonPath, // resources/
  [bas.cc + apcon.cCommandsCommonPath]: cCommandsCommonPath, // commands/
  [bas.cc + apcon.cConfigurationCommonPath]: cConfigurationCommonPath, // configuration/
  [bas.cc + apcon.cWorkflowsCommonPath]: cWorkflowsCommonPath, // workflows/
  [bas.cc + apcon.cReleasePath]: cReleasePath, // release/
  [bas.cc + apcon.cFullResourcesPath]: cFullResourcesPath, // /test/testHarness/resources/
  [bas.cc + apcon.cFullCommandsPath]: cFullCommandsPath, // /test/testHarness/resources/commands/
  [bas.cc + apcon.cFullConfigurationPath]: cFullConfigurationPath, // /test/testHarness/resources/configuration/
  [bas.cc + apcon.cFullWorkflowsPath]: cFullWorkflowsPath, // /test/testHarness/resources/workflows/
  [bas.cc + apcon.cmetaDataPath]: cmetaDataPath, // /resources/metaData.json
};
