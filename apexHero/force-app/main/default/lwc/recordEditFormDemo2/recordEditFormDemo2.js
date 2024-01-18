import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class RecordEditFormDemo2 extends LightningElement {
    nameField = NAME_FIELD;
    accountId;
    //Flexi pages provides recxord id and object api name 
    @api recordId;
    @api objectApiName = 'Account';
    //handling success after submit 
    handleSuccess (event) { 
        this.accountId=event.detail.id
    }
}