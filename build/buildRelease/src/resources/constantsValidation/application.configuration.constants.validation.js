/**
 * @file application.configuration.constants.validation.js
 * @module application.configuration.constants.validation
 * @description Contains all validations for named application configuration constants.
 * @requires odule:application.configuration.constants
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cfg from '../../constants/application.configuration.constants.js';

/**
 * @function applicationConfigurationConstantsValidation
 * @description Initializes the application configuration constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
export const applicationConfigurationConstantsValidation = [
  {Name: 'cargumentDrivenInterface', Actual: app_cfg.cargumentDrivenInterface, Expected: 'argumentDrivenInterface'},
  {Name: 'csourceResourcesPath', Actual: app_cfg.csourceResourcesPath, Expected: 'sourceResourcesPath'},
  {Name: 'cdestinationResourcesPath', Actual: app_cfg.cdestinationResourcesPath, Expected: 'destinationResourcesPath'},
  {Name: 'cdeploymentCompleted', Actual: app_cfg.cdeploymentCompleted, Expected: 'deploymentCompleted'},
];
