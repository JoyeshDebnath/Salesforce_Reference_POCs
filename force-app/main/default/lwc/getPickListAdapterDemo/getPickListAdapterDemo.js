import { LightningElement,wire } from 'lwc';

import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_SOURCE_FIELD from '@salesforce/schema/Account.AccountSource';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPickListAdapterDemo extends LightningElement {
    
    sourceOptions;
    selectedSource;

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    accountInfo;
    
    @wire(getPicklistValues, {recordTypeId: '$accountInfo.data.defaultRecordTypeId', fieldApiName: ACCOUNT_SOURCE_FIELD})
    sourcePickList ({ data, error }) { 
        if (data)
        { 
            alert(data);
            console.log("pick list data ...",data);
            this.sourceOptions = [...this.makePickListValues(data)];
        }
        if (error)
        { 
            console.log(error);
        }
    }

    makePickListValues (data) { 
        return data.values.map(item => ({
            label: item.label,
            value:item.value,
        }))
    }


    onSourceChangeHandler (event) { 
        this.selectedSource = event.target.value;

    }
}