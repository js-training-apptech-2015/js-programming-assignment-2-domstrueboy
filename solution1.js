function solution1(A){

if(typeof(A) === "string"){
  A = parseStringInArray(A);
}

  var num = 1; // initial minimal positive integer
  while(A.some(elem => elem === num)){ // while current num is finded in array, loop continues
    num++; // next positive integer
  }

  return num; // result
}

function parseStringInArray(A){
  A = A.trim();
  A = A.split(" ");

  A.forEach(function(elem, i, A){
    A[i] = parseInt(elem);
  });

  return A;
}
