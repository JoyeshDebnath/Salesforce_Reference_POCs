public class OpportunityController {
 
    public static void updateProfile(List<Id> oppIds){
        
        List<Opportunity> opps =[ SELECT Id, Name ,Amount,  Profile__c  FROM Opportunity WHERE Id IN: oppIds ] ;
        
        for(Opportunity opp:opps){
            
            if(opp.Amount==null){
                opp.Profile__c='Low';
            }
            else if(opp.Amount<10000){
                opp.Profile__c='Low';
            }
            else if(opp.Amount > 10000 && opp.Amount<50000){
                opp.Profile__c='Medium';
            }
            else if(opp.Amount>50000)
                   opp.Profile__c='High';
            
         
            
        }
           //update the opp record 
            update opps;
        
    }
}