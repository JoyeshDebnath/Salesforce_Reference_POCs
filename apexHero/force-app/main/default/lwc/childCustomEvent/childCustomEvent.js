import { LightningElement,api,track } from 'lwc';

export default class ChildCustomEvent extends LightningElement {
    @api message;
    @api staticVal;
    @track date = new Date();

    @api childMethod () { 
        this.date = new Date();
    }
    
    
    
    handleEvent () { 
        const eventS = new CustomEvent(
            'simple',
            {
                bubbles: true,
                composed:false
            }
        )
        this.dispatchEvent(eventS);
    }
}