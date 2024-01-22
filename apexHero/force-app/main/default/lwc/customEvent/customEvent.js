import { LightningElement } from 'lwc';

export default class CustomEvent extends LightningElement {

    handleClickEvent (event) {
        // const message=event.detail;
        console.log('name =', event.target.message)
        console.log('Static value=',event.target.staticVal)
    }

    handleClick (event) { 
        this.template.querySelector('c-child-custom-event').childMethod();
    }
}