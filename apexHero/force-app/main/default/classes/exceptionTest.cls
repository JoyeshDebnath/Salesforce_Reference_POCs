public with sharing class exceptionTest {
    public static void myMethod(){
        Account jdAccount=new Account(id='0015j00001XahqNAAR');
        jdAccount.AnnualRevenue=5000;
        update jdAccount;
    
        Account LauraAccount=new Account(name=null,id='0015j00001XahqcAAB');
        LauraAccount.AnnualRevenue+=5000;
        update LauraAccount;
    
    }
}