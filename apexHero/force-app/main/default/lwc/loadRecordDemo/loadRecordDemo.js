import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import NAME_FIELD from '@salesforce/schema/Account.Name';
// import { MOBILE_FIELD } from '@salesforce/schema/Employee__c.Mobile__c';

export default class LoadRecordDemo extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD,TYPE_FIELD, INDUSTRY_FIELD, ACTIVE_FIELD, PHONE_FIELD];
    nameField = NAME_FIELD;
    typeField = TYPE_FIELD;
    mobileField = PHONE_FIELD;
    industryField = INDUSTRY_FIELD;
    handleEmployeeRecordCreated (event) { 

    }


}