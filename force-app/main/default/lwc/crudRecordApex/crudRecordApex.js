import { LightningElement } from 'lwc';
import saveRecords  from '@salesforce/apex/CreateUpdateRecordsController.saveRecords'; 
export default class CrudRecordApex extends LightningElement {
    value = 'Active';
    email;
    name;
    phone;
    activeStatus;
    isLoading = false;
    get options () { 
        return [
            { label: 'Active', value: 'Active' },
            {label:'In Active',value:'InActive'},
        ]
    }

    async  handleSaveRecord (event) { 
        this.isLoading = true;
        const records = await saveRecords({ customerName: this.name, email: this.email, phone: this.phone, status: this.activeStatus });
        if (records)
        { 
            this.isLoading = false;
            console.log(records);
        }
    }

    handleFieldValueChange (event) { 
        let field = event.target.name;//get the name of the field 
        let eventValue = event.target.value;
        switch (field)
        { 
            case 'customerName':
                this.name = eventValue;
                break;
            case 'customerEmail':
                this.email = eventValue;
                break;
            case 'customerPhone':
                this.phone = eventValue;
                break;
            case 'customerIsActive':
                this.isActive = eventValue;
                break;
        }
        console.log(this.name, this.email, this.isActive);
    }

}