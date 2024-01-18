import { LightningElement,wire,api } from 'lwc';

import fetchContactAccountRecord from '@salesforce/apex/ContactController.fetchContactAccountRecord';
import deleteContactRecord from '@salesforce/apex/ContactController.deleteContactRecord';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ReadDataWithApexControllerDemo extends LightningElement {
    contactRecords;
    
    isLoading = false;
    
    @api recordId;
    @api objectApiName;


    @wire(fetchContactAccountRecord, { accountId: '$recordId' })
    contactResponse ({ data, error }) {
        if (data)
        {
            this.contactRecords = data;
        } if (error)
        {
            console.log("Something went Wrong !", error);
        }
    }

    //delete record 
    deleteContactHandler (event) { 
        const contactIdToBeDeleted = event.currentTarget.dataset.contactid;//get contact id 
        this.isLoading = true;
        deleteContactRecord({ contactId: contactIdToBeDeleted })
            .then(res => { 
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'success',
                        message: 'Record Deleted!',
                        variant:'success'
                    })
                        )
            })
            .catch(error => { 
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error Deleting the record !',
                        message: error.body.message,
                        variant:'error'
                    })
                        )
            })
            .finally(() => { 
                this.isLoading = false;
            })



    }
}