import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastExample extends LightningElement {


    showErrorToastMessage () { 
        const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Some Unexpected Error',
            variant: 'error',
            mode:'dismissable'
        });

        this.dispatchEvent(evt);
    }

    showSuccessToast () { 
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Records Created Successfully ',
            variant: 'success',
            mode:'dismissable'
        })
        this.dispatchEvent(evt);
    }

    showWarningToast () { 
        const evt = new ShowToastEvent({
            title: 'Warning!',
            message: 'You havent filled the information !',
            variant: 'warning',
            mode:'dismissable'
        })
        this.dispatchEvent(evt);
    }

    showInfoToastMessage () { 
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Thanks for Opting this ',
            variant: 'info',
            mode:'dismissable'
        })
        this.dispatchEvent(evt);
    }
    //dynamic  toast  message : use messageData array to show dynamic toast message . 
    
    handleButtonClick () { 
        const evt = new ShowToastEvent({
            title: 'Success',
            message: '{0} created ! see it {1}',
            messageData: [
                'Account',
                {
                    url: 'http://www.salesforce.com/',
                    label:'here'
                }
            ],
        })
        this.dispatchEvent(evt);
    }
}