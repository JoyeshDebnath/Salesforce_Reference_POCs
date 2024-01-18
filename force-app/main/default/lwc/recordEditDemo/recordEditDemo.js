import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class RecordEditDemo extends LightningElement {
    objectName = CONTACT_OBJECT;
    handleLoad (event) { 
        console.log(event.type)
        console.log(event.detail);
    }
    handleSubmit (event) { 
        console.log(event.type)
        console.log(event.detail);
        event.preventDefault();//stop default behaviour of event ... Default behavior is Submitting the form 

        let fields = event.detail.fields;
        fields.MobilePhone = "7907907797";
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleSuccess (event) {
        console.log(event.type)
        console.log(event.detail);
    }
    handleError (event) {
        console.log(event.type)
        console.log("Error",event.detail.detail);
    }
    saveRecord (event) { 
        console.log(event.type)
        console.log(event.detail);
    }

    resetForm (event) {
        console.log(event.type)
        console.log(event.detail);
        const fields = this.template.querySelectorAll('lighnting-input-field')
        
        fields.forEach(field => { 
            console.log(field)
            field.reset();
        })
    }
}