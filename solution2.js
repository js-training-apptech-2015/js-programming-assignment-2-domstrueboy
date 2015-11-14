function solution2(S){
  S = S.split("");

  S = S.filter(elem => elem === '[' || elem === ']' ||
                       elem === '{' || elem === '}' ||
                       elem === '(' || elem === ')' ||
                       elem === '"' || elem === "'"
              );

  var len = S.length;

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
