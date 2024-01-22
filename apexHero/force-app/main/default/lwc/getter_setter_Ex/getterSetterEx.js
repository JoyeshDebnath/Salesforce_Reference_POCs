import { LightningElement } from 'lwc';

export default class GetterSetterEx extends LightningElement {
    connectedCallback () { 
        window.console.log('Hello ConnectedCallback of getter and setter called !!!');
    }
    disconnectedCallback () { 
        window.console.log('Hello Disconnected Callback of the getter ad setter called !!!');
    }
}