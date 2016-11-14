module.exports = cssObj => (
`/* TACHYONS v4.4.1 | https://github.com/tachyons-css/tachyons */

/*
 *
 *      ________            ______
 *      ___  __/_____ _________  /______  ______________________
 *      __  /  _  __ `/  ___/_  __ \_  / / /  __ \_  __ \_  ___/
 *      _  /   / /_/ // /__ _  / / /  /_/ // /_/ /  / / /(__  )
 *      /_/    \__,_/ \___/ /_/ /_/_\__, / \____//_/ /_//____/
 *                                 /____/
 *
 *    TABLE OF CONTENTS
 *
 *    1. External Library Includes
 *       - Normalize.css | http://normalize.css.github.io
 *    2. Tachyons Modules
 *    3. Variables
 *       - Media Queries
 *       - Colors
 *    4. Debugging
 *       - Debug all
 *       - Debug children
 *
 */

/* External Library Includes */
${cssObj.normalize}

${Object.keys(cssObj)
  .filter(key => ['normalize', 'colors', 'debugChildren', 'debugGrid'].indexOf(key) === -1)
  .map(key => cssObj[key])
  .join('\n')
}

${css.colors}

/* Debugging */
${css.debugChildren}
${css.debugGrid}
