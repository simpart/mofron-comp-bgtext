/**
 * @file   mofron-comp-bgtext/index.js
 * @author simpart
 */
let mf = require('mofron');
let Text = require('mofron-comp-text');

/**
 * @class BgText
 * @brief background text component for mofron
 */
mf.comp.BgText = class extends mofron.comp.Text {
    
    constructor (po) {
        try {
            super();
            this.name('BgText');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */
    initDomConts (prm) {
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
module.exports = mofron.comp.BgText;
