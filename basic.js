function one(a){
    console.log("This is a one",a);
     
  }
  
  function two(a){
   console.log("THis is two" ,a);
   return 2
  }
  
  function three(a){
   console.log("This is three",a);
   a();
   return 3;
  }
  function four(){
   console.log("This is four");
   return 4;
  }

  one(two(three(four)))