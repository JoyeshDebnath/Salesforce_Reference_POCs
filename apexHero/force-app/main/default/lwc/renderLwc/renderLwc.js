import { LightningElement } from 'lwc';
import template1 from './templateA.html'
import parent from './renderLwc.html';


export default class RenderLwc extends LightningElement {
    toggleTemplate = false;
    
    render () { 
        return this.toggleTemplate === true ? template1 : parent;
    }

    templateToggler () { 
        this.toggleTemplate = !this.toggleTemplate;
    }
}