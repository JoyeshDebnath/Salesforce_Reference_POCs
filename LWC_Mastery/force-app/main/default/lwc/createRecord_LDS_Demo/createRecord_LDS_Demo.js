import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class CreateRecord_LDS_Demo extends NavigationMixin(LightningElement) { 
    name;

    saveRecord () {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields:fields
        }
        createRecord(recordInput)
            .then(record => { 
                alert(JSON.stringify(record))

                this[NavigationMixin.GenerateUrl]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: record.id,
                        actionName:'view'
                    }
                }).then(url => { 
                    const evt = new ShowToastEvent({
                        title: 'Success!',
                        message: 'Record {0} Created ! See it {1} !',
                        messageData: [
                            'Account',
                            {
                                url,
                                label:'Here'
                            }
                        ],
                        variant:'success'
                    })
                    this.dispatchEvent(evt);
                })
            }).catch(error => { 
                const evt = new ShowToastEvent({
                    title: 'Error Creating record !',
                    message: error.body.message,
                    variant:'error'
                })
                this.dispatchEvent(evt);
            })
        
        console.log(NAME_FIELD);
        // fields[NAME_FIELD] =

    }
    
    nameChangeHandler (event) { 
        this.name = event.target.value;
    }
}