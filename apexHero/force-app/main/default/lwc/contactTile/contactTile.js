import { LightningElement,api } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact;

    constructor() { 
        super();
        console.log(this.contact);
    }

}