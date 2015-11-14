describe("solution1", function(){

  it("A = [1, 2, 3, 4, 5]: результат = 6", function() {
    assert.equal(solution1([1, 2, 3, 4, 5]), 6);
  });

  it("A = [1, 2, 3, 4, 7, 6, 5]: результат = 8", function() {
    assert.equal(solution1([1, 2, 3, 4, 7, 6, 5]), 8);
  });

  it("A = '1 2 3 4 7 6 5': результат = 8", function() {
    assert.equal(solution1('1 2 3 4 7 6 5'), 8);
  });

  it("A = '1 2 3 4 7 6 5 10': результат = 8", function() {
    assert.equal(solution1('1 2 3 4 7 6 5 10'), 8);
  });

});

describe("solution2", function(){

  it('строка "" : результат = true', function() {
    assert.equal(solution2('""'), true);
  });

  it('строка [] : результат = true', function() {
    assert.equal(solution2('[]'), true);
  });

  it('строка [()] : результат = true', function() {
    assert.equal(solution2('[()]'), true);
  });

  it('строка [](){} : результат = true', function() {
    assert.equal(solution2('[](){}'), true);
  });

  it('строка ][ : результат = false', function() {
    assert.equal(solution2(']['), false);
  });

  it('строка [(]) : результат = false', function() {
    assert.equal(solution2('[(])'), false);
  });

  it('строка [(hello]) : результат = false', function() {
    assert.equal(solution2('[(hello])'), false);
  });

  it('строка [(hello)world] : результат = true', function() {
    assert.equal(solution2('[(hello)world]'), true);
  });

});

describe("solution3", function(){

  it('массив [1, 2, 3], функция (a)=>a*2 : результат = [2, 4, 6]', function() {
    for(var i = 0; i < [1, 2, 3].length; i++){
      assert.equal(
        solution3([1, 2, 3], '(a)=>a*2')[i], [2, 4, 6][i]);
    }
  });

  it('массив [1, 2, 3], функция (a)=>a+2 : результат = [3, 4, 5]', function() {
    for(var i = 0; i < [1, 2, 3].length; i++){
      assert.equal(
        solution3([1, 2, 3], '(a)=>a+2')[i], [3, 4, 5][i]);
    }
  });

  it('массив [1, 2, 3], функция ()=>1 : результат = [1, 1, 1]', function() {
    for(var i = 0; i < [1, 2, 3].length; i++){
      assert.equal(
        solution3([1, 2, 3], '()=>1')[i], [1, 1, 1][i]);
    }
  });

  it('строка 1 2 3, функция (a)=>a*2 : результат = [2, 4, 6]', function() {
    for(var i = 0; i < [1, 2, 3].length; i++){
      assert.equal(
        solution3('1 2 3', '(a)=>a*2')[i], [2, 4, 6][i]);
    }
  });

  it('строка 1 2 3, функция (a)=>a+2 : результат = [3, 4, 5]', function() {
    for(var i = 0; i < [1, 2, 3].length; i++){
      assert.equal(
        solution3('1 2 3', '(a)=>a+2')[i], [3, 4, 5][i]);
    }
  });

  it('строка 1 2 3, функция ()=>1 : результат = [1, 1, 1]', function() {
    for(var i = 0; i < [1, 2, 3].length; i++){
      assert.equal(
        solution3('1 2 3', '()=>1')[i], [1, 1, 1][i]);
    }
  });

});
