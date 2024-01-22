import { LightningElement,track } from 'lwc';

export default class QuickCase extends LightningElement {
    subject;
    description;
    
    statusValue;
    priorityValue;
    originValue;

    handleChange (event) { 
        const name = event.target.name;
        const val = event.target.value;
        if (name === 'subject')
        {
            this.subject = val;
        }
        else if (name === 'description')
            this.description = this.description;
        else if (name === 'Case Status')
            this.statusValue = val;
        else if (name === 'Case Origin')
            this.originValue = val;
        else if (name === 'Case Priority')
            this.priorityValue = val;

        
    }

    handleCreate (event) { 
        console.log(this.statusValue, this.originValue, this.description, this.priorityValue, this.subject);
    }


    get status () { 
        return [
            { label: 'New', value: 'New' },
            { label: 'Closed', value: 'Closed' },
        ]
    }

    get priority () { 
        return [
            { label: 'High', value: 'High' },
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
        ]
    }

    get origin () { 
        return [
            { label: 'Web', value: 'Web' },
            { label: 'Phone', value: 'Phone' },
            { label: 'Email', value: 'Email' },
        ]
    }
}