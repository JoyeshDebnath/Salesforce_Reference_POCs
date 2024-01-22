import { LightningElement,track } from 'lwc';
import { si } from 'c/utitlity'
export default class SharedMisc extends LightningElement {

    @track p;
    @track rate;
    @track time;

    constructor() { 
        super();
        const interest = si(1000, 10, 2.4);
        alert(`Simple Interest is ${interest}`)
    }

    calculateSI () { 
        const interest = si(this.p, this.rate, this.time);
        console.log('The si', interest);
    }
}