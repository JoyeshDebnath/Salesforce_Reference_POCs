import { LightningElement,wire } from 'lwc';

import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';

import  ACCOUNT_OBJECT  from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ObjectInfoAdapterDemo extends LightningElement { 
    
    objectData;
    multipleObjectsApiNames = [ACCOUNT_OBJECT, CONTACT_OBJECT];
    multipleObjectsData;
// Demo : get single object info
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })//adapter id adpater config 
    accountInfo ({ data, error }) { 
        if (data)
        { 
            alert(JSON.stringify(data));
            console.log("DATA:", data);
            this.objectData=data;
        }
        if (error)
        { 
            console.log(error);
        }
    }

    //Demo : get multiple objects infos 
    @wire(getObjectInfos, { objectApiNames: '$multipleObjectsApiNames' })
    multipleObjectsResponse ({ data, error }) { 
        if (data)
        { 
            this.multipleObjectsData = data;
            console.log("DATA of Multiple Objects :", data);
        }
        if (error)
        { 
            console.log(error);
        }
    }

}