import { LightningElement,api } from 'lwc';

export default class ChildHelloWorld extends LightningElement {
    
    constructor() { 
        super();
        console.log('---Child called ')
    }
    connectedCallback () { 
        console.log('Child connected Callback ...')
    }

    renderedCallback () { 
        console.log('Child rendered callback ...');
    }
    @api
        message = 'sample default message';

    @api
    changeMessage () { 
        this.message = 'Another message changes ..';
        return this.message;
    }

    
}