/**
 * @file   mofron-comp-bgtext/index.js
 * @author simpart
 */
require('mofron-comp-text');

/**
 * @class BgText
 * @brief background text component for mofron
 */
mofron.comp.text.BgText = class extends mofron.comp.Text {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('BgText');
            this.prmOpt(prm_opt);
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
mofron.comp.text.bgtext = {};
module.exports = mofron.comp.text.BgText;
