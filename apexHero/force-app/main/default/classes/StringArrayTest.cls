public class StringArrayTest{
   public  static List<String> generateStringArray(Integer n){
   
      List<String> res=new List<String>();
      for(Integer i=0;i<n;i++){
           
           res.add('Test '+i);
      }
   return res;
   }

}//class