function solution3(A, F){

if(typeof(A) === "string"){
  A = parseStringInArray(A);
}

  return A.map(eval(F)); // result
}

function parseStringInArray(A){
  A = A.trim();
  A = A.split(" ");

  A.forEach(function(elem, i, A){
    A[i] = parseInt(elem);
  });

  return A;
}
