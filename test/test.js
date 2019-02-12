
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
 });

 QUnit.test('Testing Area function with positive number sets of inputs', function (assert) {
 
    assert.equal(calculate1(2,12),12,'Tested with small positive number 5');
    assert.equal(calculate1(2,0),0,'Tested with zero number ');
    assert.equal(calculate1(2,1555555),1555555,'Tested with large positive number 555');
 });
 
 QUnit.test('Testing Area function with negitive number sets of inputs', function (assert) {
 
    assert.equal(calculate1(-2,6),-6,'Tested with small -ve number -5');
    assert.equal(calculate1(-2,0),0,'Tested with small -ve number -1');
    assert.equal(calculate1(-2,-88393),88393,'Tested with large -ve number -555');
 });
 
 QUnit.test('Testing Area function with floating point number sets of inputs', function (assert) {
 
    assert.equal(calculate1(2,5.67),5.67,'Tested with small floating point number 5.67');
    assert.equal(calculate1(2,1.0),1.0,'Tested with small floating point number 1.0');
    assert.equal(calculate1(2,555.55555),555.55555,'Tested with large floting number 555.555');
 });
 
 QUnit.test('Testing Area function with negitive floating point number sets of inputs', function (assert) {
 
    assert.equal(calculate1(-2,-5.67),5.67,'Tested with small -ve floating point number -5.67');
    assert.equal(calculate1(-2,-1.0),1.0,'Tested with small -ve floating point number -1.0');
    assert.equal(calculate1(-2,-555.55555),555.55555,'Tested with -ve large floting number -555.555');
 });
 
 QUnit.test('Testing Area function with String', function (assert) {
 
    assert.throws(function () { calculate1('a'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
 });
 
 QUnit.test('Testing Area function with No Arguments', function (assert) {
 
    assert.throws(function () { calculate1(); }, /The given argument is not a number/, 'no Argument method check');
 });

 QUnit.test('Testing DOM Manipulation', function (assert) {
 
   assert.equal(document.getElementById('one').innerHTML,"This p element has id one.",'DOM manipulation testing.');
   assert.equal(document.getElementsByClassName('classone').innerHTML,"This p element belongs to classone.",'DOM manipulation testing.');
   assert.equal(calculate1(10,10),document.getElementById('result').innerHTML,'DOM manipulation testing.');
});
 
 
 