@isTest 
public class Covid19Test {

 
    
    @isTest
    public static void treatPatientTest(){
         Covid19 jaipur=new Covid19(-10);
        
         Integer treated=jaipur.getTreated();
         //check if cnt is 0 or not it cant be negetive  
          System.assertEquals(0,treated,'Not Zero ! ' );
        
        
       
    }//treat patient
}