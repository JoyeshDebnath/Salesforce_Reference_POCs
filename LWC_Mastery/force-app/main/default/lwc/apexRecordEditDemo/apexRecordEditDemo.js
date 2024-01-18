import { LightningElement,wire,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import saveAccounts from '@salesforce/apex/AccountController.saveAccount'


export default class ApexRecordEditDemo extends LightningElement {
    accountData
    @wire(getAccounts)
    accountDataResponse ({ data, error }) { 
        if (data)
        { 
            this.accountData = data;
        }
        if (error)
        { 
            console.log(error);
        }
    }

}