public class Company {
     public String companyName;
     public String ceo;
     public Integer employeeCnt;
     public Long revenue;
     
     //List of all customers 
     private List<Client> customers=new List<Client>();
     
     
     public void addNewCustomer(String clientName, String website , String email, Long phoneNumber){
     // add a new customer 
     Client customer=new Client(clientName,website,email,phoneNumber);
     customers.add(customer);
         
     }
     
     public void getCustomers(){
     //print all customers ..
         for(Client customer:customers){
             System.debug('customer name ='+customer.clientName+ ', Website = '+customer.website + ' , Email = '+customer.email + ' , phone number: '+customer.phoneNumber);
         }
     }
  //private inner class to store  customer informations 
  private class Client {
      public String clientName;
      public String website;
      public String email;
      public Long phoneNumber;
      
      Client(String clientName, String website , String email, Long phoneNumber){
         this.clientName=clientName;
         this.email=email;
         this.phoneNumber=phoneNumber;
         this.website=website;
      }
  }//inner class client 
}