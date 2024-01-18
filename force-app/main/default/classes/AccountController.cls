public class AccountController {
    
    public static List<Account> insertAccounts(List<Account> accountsToInsert){
       insert accountsToInsert;
       return accountstoInsert;
     }//insert list of accounts 
    
    public static Account insertSingleAccount(Account account){
        insert account;
        return account ; 
    }//enter a single account 
    
    public static List<Account> getAllAccounts(){
        List<Account> accnts=[SELECT Id, Name, Rating, Phone  FROM Account];
        return accnts;
    }//get all accounts
    
    public static void printAllAccounts(){
       List<Account> accounts = getAllAccounts();
        for(Account accnt:accounts){
           System.debug('The name of the account = '+ accnt.Name +' , The phone number = '+accnt.Phone+' , the Rating = '+accnt.Rating);
        }//iterate accounts 
    }//print all accounts 
    
    public static Integer getAccountSize(){
        List<Account> accnts=getAllAccounts();
        return accnts.size();
        
    }//size of the accounts 

    
}//class