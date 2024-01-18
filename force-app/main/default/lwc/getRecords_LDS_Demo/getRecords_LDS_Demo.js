import { LightningElement,wire,api } from 'lwc';
import { getRecord,updateRecord } from 'lightning/uiRecordApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ID_FIELD from '@salesforce/schema/Account.Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_SOURCE_FIELD from '@salesforce/schema/Account.AccountSource';


export default class GetRecords_LDS_Demo extends LightningElement {
    @api recordId;
    accountRecord;

    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_SOURCE_FIELD, NAME_FIELD], optionalFields: [] })
    getRecordHandler ({ data, error }) { 
        if (data)
        { 
            console.log('Record', JSON.stringify(data))
            this.accountRecord = data;
        }
        if (error)
        { 
            let message = 'Unknown Error';
            
        }
    }
}