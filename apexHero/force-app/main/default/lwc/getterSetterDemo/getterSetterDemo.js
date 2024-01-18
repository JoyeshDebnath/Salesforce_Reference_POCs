import { LightningElement } from 'lwc';

export default class GetterSetterDemo extends LightningElement {
    name = 'cat';
    originalAge = 1;
    newAge = 0;
    //getters and setters 
    get age () { 
       return this.originalAge;
    }
    set age (value) { 
        if (value > 20)
        { 
            throw new Error('Invalid age for Cat !');
        }
        this.originalAge = value;

    }
    updateAge (event) { 
            this.newAge=event.target.value;
    }

    updateOriginalAge () { 
        this.age=this.newAge;
    }
}