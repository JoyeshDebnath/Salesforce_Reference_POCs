import { LightningElement } from 'lwc';

export default class GrandChild extends LightningElement {
    handleSimpleEvent (event) { 
        alert('Grand Child !');
    }
}