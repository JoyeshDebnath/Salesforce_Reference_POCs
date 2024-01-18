public class Fitness{

public static Decimal calculateBMI(Decimal wt,Decimal ht){
    if(ht==0.0){
       return -1; 
    }
    Decimal bmi=0.0;
    bmi=wt/(ht*ht);
    return bmi;
}

public static Decimal calculatePace( Decimal dist,Decimal tm ) {
    if(tm==0.0)
        return -1;
  Decimal pace=0.0;
  pace = dist/tm;
  return pace;
}


}//class