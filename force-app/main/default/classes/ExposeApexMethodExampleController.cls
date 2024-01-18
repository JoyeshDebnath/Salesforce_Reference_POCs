public with sharing class ExposeApexMethodExampleController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        List<Contact> contactList=[select Id,Name From Contact limit 5];
        return contactList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByName(String name){
        String strName='%'+name+'%';
        List<Contact> contactList=[select Id,Name FROM Contact WHERE Name LIKE:strName limit 5];
        return contactList;
    }
}