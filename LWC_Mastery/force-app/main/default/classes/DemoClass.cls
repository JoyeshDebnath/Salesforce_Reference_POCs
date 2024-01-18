public class DemoClass{
  
  
  public void showAnimeName(String anime){
  System.debug('Anime name ='+anime);
  }
  
  public String showAnimeRating(Integer ratingVal){
    String ratingMsg='';
    
       switch on  ratingVal{
           when 0,1,2{
              ratingMsg='Worst';
           }
           when 3,4,5{
             ratingMsg='Average';
           }
           when 6,7,8{
           ratingMsg='Good';
           }
           when 9,10{
           ratingMsg='Best';
           }
           when else{
           ratingMsg='Invalid rating value !';
           }
       }
       
       return ratingMsg;
  }
}