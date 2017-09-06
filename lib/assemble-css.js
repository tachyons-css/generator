module.exports = (cssObj, version = '0.0.1') => `
/* TACHYONS v${version} | https://github.com/tachyons-css/tachyons */

/*
 *
 *      ________            ______
 *      ___  __/_____ _________  /______  ______________________
 *      __  /  _  __  /  ___/_  __ \_  / / /  __ \_  __ \_  ___/
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

${importModules(cssObj)}

${cssObj.colors}
`

const importModules = cssObj => (
  Object
    .keys(cssObj)
    .filter(key => !['debugChildren', 'debugGrid'].includes(key))
    .map(key => cssObj[key])
    .join('\n')
)
