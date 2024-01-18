public with sharing class CreateUpdateRecordsController {
    @AuraEnabled
    public static String saveRecords(String customerName,String email,String phone,String status){
            Customer__c cust=new Customer__c();
            cust.Name=customerName;
            cust.Email__c=email;
            cust.isActive__c=status;
            cust.phone__c=phone;
            if(cust!=null){
                insert cust;
            }

            return cust.Id;
    }
    // @AuraEnabled
    // public static String updateCustomerRecords(String name,String phone,String email,String status,String recordId){
    //         Customer__c cust=new Customer__c();

    // }
}