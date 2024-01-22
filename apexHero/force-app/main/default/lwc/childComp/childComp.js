import { LightningElement,api,track } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message = '';

    @api pageNumber;
}