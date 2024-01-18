public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContactAccountRecord(String accountId){

        try{
                if(!String.isBlank(accountId)){
                        List<Contact> contactRecord=[SELECT 
                                                        Id,Name,Title,Email,Phone 
                                                        FROM Contact 
                                                        WHERE AccountId=:accountId 
                                                        LIMIT 10];
                        
                        return contactRecord;
                }
                return null;
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static boolean deleteContactRecord(String contactId){
        try{
                if(!String.isBlank(contactId)){
                    //delete 
                    Contact con=new Contact(Id=contactId);
                    delete con;
                    return true;
                }
                else
                    return false;
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}