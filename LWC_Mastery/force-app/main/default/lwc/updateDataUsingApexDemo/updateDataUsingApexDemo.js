import { LightningElement,wire,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

//Account Fields 
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_NO_OF_EMPLOYEES from '@salesforce/schema/Account.NumberOfEmployees';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
//apex 
import updateAccountRecords from '@salesforce/apex/AccountController.updateAccountRecords';


export default class UpdateDataUsingApexDemo extends LightningElement {

    @api recordId;
    accountName;
    accountPhone;
    accountNoOfEmployee;

    isLoading = false;

    //get the records and fields values and populate in advance in the ui 
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME, ACCOUNT_PHONE, ACCOUNT_NO_OF_EMPLOYEES] })
    recordResponse ({ data, error }) { 
        if (data)
        { 
            console.log(data);
            this.accountName = getFieldValue(data, ACCOUNT_NAME);
            this.accountPhone = getFieldValue(data, ACCOUNT_PHONE);
            this.accountNoOfEmployee = getFieldValue(data, ACCOUNT_NO_OF_EMPLOYEES);
            
        }
        if(error){ 
            console.log("ERROR", error);
        }
    }

    //handle changes in input fields 
    handleChange (event) { 
        console.log("Event details name :" + event.target + event.details);
        if (event.target.name === 'accountName')
        { 
            this.accountName = event.target.value;
        }
        if (event.target.name === 'accountPhone')
        { 
            this.accountPhone = event.target.value;
        }
        if (event.target.name === 'accountNoOfEmployee')
        { 
            this.target.value = this.accountNoOfEmployee;
        }

        console.log(this.accountName,this.accountPhone,this.accountNoOfEmployee)
    }


    //handle submit :pass the json of the fields to be updated .. 

    submitForm (event) { 
        this.isLoading = true;
        let accountSubmitForm = {
            accountId: this.recordId,
            accountName: this.accountName,
            accountPhone: this.accountPhone,
            accountNoOfEmployee: this.accountNoOfEmployee
        }//create JSON

        let accountStr = JSON.stringify(accountSubmitForm);

        updateAccountRecords({ accountJSON: accountStr })
            .then(accnt => { 
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success!',
                        message: 'Account updated Successfully!',
                        variant:'success'
                    })
                )
            }).catch(err => { 
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error!',
                        message: err.body.message,
                        variant:'error'
                    })
                )
            }).finally(() => { 
                this.isLoading = false;
            })
    }
}