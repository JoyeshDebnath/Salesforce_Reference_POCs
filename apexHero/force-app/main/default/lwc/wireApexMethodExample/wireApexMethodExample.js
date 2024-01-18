import { LightningElement,wire } from 'lwc';

import getContactsData from '@salesforce/apex/ExposeApexMethodExampleController.getContacts';
import getFilteredByNameContactsData from '@salesforce/apex/ExposeApexMethodExampleController.getContactsByName';

export default class WireApexMethodExample extends LightningElement {
    allContacts;
    allFilteredContacts;
    name = '';
    //Demo 1: using a property in wire .. 
    @wire(getContactsData)
    contacts;//name of the property 
    
    //Demo 2 : using function in wire 
    @wire(getContactsData)
    contactsResponse ({ data, error }) { 
        if (data)
        { 
            this.allContacts = data;
        }
        if (error)
        { 
            console.error(error);
        }
    }

    //Demo 3 : using parameter in wire to send to apex .. 
    @wire(getFilteredByNameContactsData, { name: '$name' })
    filteredContactsResponse ({ data, error }) { 
        if (data) { 
            this.allFilteredContacts = data;
        }
        if (error) { 
            console.log(error);
        }
    }

    onChangeHandler (event) { 
        this.name = event.target.value;
    }

}