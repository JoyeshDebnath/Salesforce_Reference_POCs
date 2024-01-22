import { LightningElement } from 'lwc';

export default class LifecycleMethodsDemo extends LightningElement {
    name='Joyesh'
    constructor() { 
        super();
        console.log('## Inside Constructor');
        this.name+='   Debnath'
    }

    connectedCallback () { 
        console.log('## Connected Call back ');
    }

    disconnectedCallback () { 
        console.log('### Disconnected Callback !');
    }

    renderedCallback () { 
        console.log('@@@@  Rendered Callback called ')
    }

    errorCallback (error, stack) { 
        console.log('Eror,',error)
    }
}