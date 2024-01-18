import { LightningElement,api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';

export default class RecordEditFormAccountDetails extends LightningElement { 
    @api recordId;
    accountName = ACCOUNT_NAME;
    accountType = ACCOUNT_TYPE;

    resetForm (event) { 
        let fields = this.template.querySelectorAll('lightning-input-field')
        fields.forEach(field => { 
            field.reset();
        })
    }
}