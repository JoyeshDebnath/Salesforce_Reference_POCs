import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class RecordViewFormDemo1 extends LightningElement {
    objectName = CONTACT_OBJECT;
    recordId = '0035j000012HwH1AAK';
    hanldeLoad (event) { 
        console.log(event.type);
        console.log(event.detail);
    }

    updateRecordId () { 
        this.recordId = '0035j000012HwH6AAK';
    }
}