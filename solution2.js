function solution2(S){
  S = S.split("");

  S = S.filter(elem => elem === '[' || elem === ']' ||
                       elem === '{' || elem === '}' ||
                       elem === '(' || elem === ')' ||
                       elem === '"' || elem === "'"
              );

//  var buffer = [];

  var len = S.length;
  /*for(var i = 0; i < len; i++){
    if(S[i] === '[' || S[i] === '{' || S[i] === '(' || S[i] === '"' || S[i] === "'"){
      count++;
    }
  }*/
  S = S.join('');

  for(var i = 0; i < len/2; i++){
    if(S.includes('[]')){
      S = S.split('[]').join('');
    } else if(S.includes('{}')){
      S = S.split('{}').join('');
    } else if(S.includes('()')){
      S = S.split('()').join('');
    } else if(S.includes('""')){
      S = S.split('""').join('');
    } else if(S.includes("''")){
      S = S.split("''").join('');
    }
  }

  return S === "";
}
