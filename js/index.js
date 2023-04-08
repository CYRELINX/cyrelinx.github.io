/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
const devtools={isOpen:!1,orientation:void 0},threshold=170,emitEvent=(e,i)=>{globalThis.dispatchEvent(new globalThis.CustomEvent("devtoolschange",{detail:{isOpen:e,orientation:i}}))},main=({emitEvents:e=!0}={})=>{const i=globalThis.outerWidth-globalThis.innerWidth>170,o=globalThis.outerHeight-globalThis.innerHeight>170,t=i?"vertical":"horizontal";o&&i||!(globalThis.Firebug&&globalThis.Firebug.chrome&&globalThis.Firebug.chrome.isInitialized||i||o)?(devtools.isOpen&&e&&emitEvent(!1,void 0),devtools.isOpen=!1,devtools.orientation=void 0):(devtools.isOpen&&devtools.orientation===t||!e||emitEvent(!0,t),devtools.isOpen=!0,devtools.orientation=t)};main({emitEvents:!1}),setInterval(main,500);export default devtools;