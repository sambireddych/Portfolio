//let fibonacci = documment.getElementById("fib");

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function factorial(num){
  if (num <= 1){
    return 1
  }
  else{
    return (num * factorial(num - 1));
  } 
  
}



function calculator(){
  var radiSelect
  if(document.getElementById("valueFact").checked){
      radiSelect = "Factorial";
  }
  else if(document.getElementById("valueFibbo").checked){
    radiSelect = "Fibanoci";
  }
  
  const n = document.getElementById("num").value;
  switch(radiSelect){

    case "Fibanoci":  
                    document.getElementById("result").innerHTML= fibonacci(n);
                    break;
   case "Factorial" :
                    document.getElementById("result").innerHTML= factorial(n);
                    break;
}
}

$('.menu').click(function(){
  $('.navMobileList').slideToggle();
})

