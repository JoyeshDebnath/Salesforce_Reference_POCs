@isTest
public class FitnessTest {
  @isTest
    public static void calculateBMI_Test(){
        Decimal weight=75.0;
        Decimal height=5.0;
        System.assertEquals(3.0, Fitness.calculateBMI(weight,height),'BMI is calculated wrong !');
    }
  @isTest
    public static void calculatePace_Test(){
        Decimal dist=15.0;
        Decimal tim=3.0;
        System.assertEquals(5.0, Fitness.calculatePace(dist, tim),'Pace is calculated wrong !');
    }    
    
  @isTest
    public static void calculateBMI_Test2(){
        Decimal weight=75.0;
        Decimal height=0.0;
        System.assert(Fitness.calculateBMI(weight, height)==-1,'Value must be -1');
    }
    
}