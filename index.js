/**
 * @file mofron-comp-bgtext/index.js
 * @brief background text component
 *        it is easy to read on any background
 * @license MIT
 */
const Text = require('mofron-comp-text');

module.exports = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                dict: component config
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('BgText');
            this.config(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.style({
                'text-shadow' : '3px 3px 5px white'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
