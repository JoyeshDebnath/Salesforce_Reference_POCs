import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/WireController.getAccounts';
import primaryTemplate from './helloWorld.html';
import secondaryTemplate from './template2.html';


export default class HelloWorld extends LightningElement {
    parentVar;
    isRender = false;
    isConnectedCallbackValue = false;
    //constructor  1> cycle
    
    constructor() {
        super();
        console.log('Parent called !');
        console.log(this.isConnectedCallbackValue);
        this.connectedCallbackValue = true;
    }

    //2 connected callBack
    connectedCallback () { 
            console.log("Inside the connecetd callnback ..",this.connectedCallbackValue);
    }

    //3   rendered callback ... `
    renderedCallback () { 
        console.log('Parent rendered call back .. ')
    }

    //4 .. render () hook 
    render () { 
        if (!this.isRender)
        {
            return primaryTemplate;
        } else
        { 
            return secondaryTemplate;
        }
    }

    //5th disconnectedCallback ..... called on DOM removal .. 
    disconnectedCallback () {
        console.log('.....disconnected call back ..')
    }
    
    @wire(getAccounts) accountList;
    @track greeting;

    handleMsg (event) {
        this.parentVar=this.template.querySelector('c-child-hello-world').message;
    }
    handleChangeMsg (event) { 
        this.parentVar = this.template.querySelector('c-child-hello-world').changeMessage();
    }
    onChangeHandler (event) { 
        this.greeting = event.target.value;
        this.isRender = true;
    }
}