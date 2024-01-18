import { LightningElement,api,wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import Name_Field from '@salesforce/schema/Contact.Name';
import Phone_Field from '@salesforce/schema/Contact.Phone';

export default class LightningDataServices extends LightningElement {
    @api recordId = '0035j000012HwHDAA0';
    fields = [Name_Field, Phone_Field];
    nameField = Name_Field;
    phoneField = Phone_Field;
    objectApiName = 'Contact';
    
    submitRecord (event) { 
        console.log('btn clicked !');
    }
    handleSubmit (event) { 

    }
    handleSuccess (event) { 

    }
    handleError (event) {
        
    }
}