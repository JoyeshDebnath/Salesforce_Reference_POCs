import { LightningElement, wire, track } from 'lwc';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import CONTACT_OBJECT  from '@salesforce/schema/Contact';

import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME  from '@salesforce/schema/Contact.LastName';
import MOBILE_PHONE from '@salesforce/schema/Contact.MobilePhone';
import EMAIL from '@salesforce/schema/Contact.Email';
import DEPARTMENT  from '@salesforce/schema/Contact.Department';
export default class CustomRecordEditForm extends LightningElement {

    contactRecordId = '0035j000012HwHDAA0';
    contactRecord = {};//old value of contact  fields 
    @track
    contactRecordEditable = {}//updated values of ciontact fields 
    
    @wire(getRecord, {
        recordId: "$contactRecordId",
        fields:[
            FIRST_NAME,
            LAST_NAME,
            MOBILE_PHONE, 
            EMAIL,
            DEPARTMENT
        ]
        
    })
    updateContactField (event) { 

    }

    saveRecord (event) { }

    resetForm (event) { }
}