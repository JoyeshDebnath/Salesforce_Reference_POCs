public with sharing class AccountController {
    // @AuraEnabled(cacheable=true)
    // public static List<Account> getAccounts(){
    //     return [SELECT 
    //     Id,
    //     Name,
    //     Industry,Active__c 
    //     FROM Account 
    //     ORDER BY CreateDate 
    //     DESC LIMIT 10]; 
    // }

    @AuraEnabled(cacheable=true)
    public static void saveAccount(List<Account> inputAccs){
        update inputAccs;
    }

    @AuraEnabled
    public static Account updateAccountRecords(String accountJSON)
    {
        try{
            AccountWrapper accountWrapperRec=(AccountWrapper)JSON.deserialize(accountJSON,accountWrapper.class);

            System.debug('Update Account Records accountWrapper Rec : '+accountWrapperRec);

            if(accountWrapperRec!=null && accountWrapperRec.accountId!=null){
                Account accRec=new Account(Id=accountWrapperRec.accountId);
                accRec.Name=accountWrapperRec.accountName;
                accRec.Phone=accountWrapperRec.accountPhone;
                accRec.NumberOfEmployees=accountWrapperRec.accountNoOfEmployee;
                update accRec;
                return accRec;
            }
            return null;
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class AccountWrapper{
        public String accountId;
        public String accountName;
        public String accountPhone;
        public Integer accountNoOfEmployee;
    }
}