import { LightningElement } from 'lwc';

export default class Child extends LightningElement {

    handleSlotChange () { 
        alert('Slot changed ')
    }
}