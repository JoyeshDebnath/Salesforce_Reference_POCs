import { LightningElement,wire,api,track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi'

export default class ObjectInfoApiDemo extends LightningElement {
    objectApiName;
    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo;


    handleClick () { 
        this.objectApiName = this.template.querySelector('lightning-input').value;
        console.log('##Object name :', this.objectApiName);
    }
    get objectMetadata () {
        return this.objectInfo ? JSON.stringify(this.objectInfo.data):'';
    }



}