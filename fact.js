//factorialize a num 5*4*3*2*1

function factorialize(num){
  var result = 1;
  //for loop
  for(i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}

factorialize(5);
