import { LightningElement,api,wire } from 'lwc';
import  ACTIVE_FIELD from '@salesforce/schema/Account.Active__c';
import  PHONE_FIELD  from '@salesforce/schema/Account.Phone';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
// toast 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';


const FIELDS = ["Account.Phone"];
export default class EditRecordPractice extends LightningElement {
    @api recordId;
    @api objectApiName;
    inputVal = "";
    accountData;

    phoneField = PHONE_FIELD;

    fields = [
        {
            label: 'Account Name',
            field:NAME_FIELD,
        },
        {
            label: 'Account Phone',
            field:PHONE_FIELD,
        },
        {
            label: 'Account Rating',
            field:RATING_FIELD,
        },
        {
            label: 'Account Industry',
            field:INDUSTRY_FIELD,
        },

    ]
    myFields = [ACTIVE_FIELD, PHONE_FIELD];

    
    // nameField = NAME_FIELD;
    // phoneField = PHONE_FIELD;
    // ratingField = RATING_FIELD;
    // industryField = INDUSTRY_FIELD;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    accountResponse ({ data, error }) { 
        if (data)
        { 
            this.accountData = data;
            console.log('Dasta fetched =', this.accountData);
        } if (error)
        { 
            this.dispatchEvent({
                title: 'Something Went wrong !',
                message: 'Could not fetch data properly !',
                variant:'error'
            })
        }
    }

    get phone () { 
        return this.accountData.fields.Phone.value;
    }

    //onchange 
    handleChange (event) {
        this.inputVal=event.target.value;
    }
    
    //reset to original Values for the fields .  
    handleReset (event) { 
        // alert('Reset Called!')
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields)
        { 
            inputFields.forEach((field) => { 
                field.reset();
            })    
        }
    }

    handleError (event) { 
        console.log(event.detail);
        const errorToastEvt = new ShowToastEvent({
            title: 'Error creating Record!',
            message: event.detail.message,
            variant:'error'
        })
        this.dispatchEvent(errorToastEvt);
    }

    // submit and also custom validation 

    handleSubmit (event) { 
        event.preventDefault();
        const phoneField = this.template.querySelector("[name:'Phone']"); 
        const value = phoneField.value;
        if (value.includes('#'))
        {
            phoneField.setCustomValidity('Cannnot contain #');
        } else
        { 
            //if there was a custom error before then reset it 
            phoneField.setCustomValidity('');
            const fields = event.detail.fields;
            fields.Phone = this.inputVal;
            this.template.querySelectorAll('lightning-record-edit-form').submit(fields);
        }
        phoneField.reportValidity();
    }

    
}