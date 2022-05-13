let lines = (44);

         subtractProductAndSum = parseInt(  lines       );
let n = parseInt(      subtractProductAndSum        );
let str = String(  n  );
   
let product = 1;
let sum = 0;

   
for(let  valor   of str   ){
    
      product *=   valor     ;
      sum += +valor;
  }
let result = product - sum;
 console.log( "resultado é:",   result )