import { LightningElement } from 'lwc';
import hasAccessUI from '@salesforce/customPermission/myFirstCustomPermission';

export default class PermissionBasedUI extends LightningElement {
    
    get isUIAccessible () { 
        return hasAccessUI;
    } 

}