var assert = require('chai').assert;
var { createRamp, createSkater, addTrick, listTricks, removeTrick, calculateTotal } = require('./skater')



describe('Skatepark', function() {
  it.skip('should create a ramp', function() {
    var ramp = createRamp('halfpipe', 12, 8.50);

    assert.equal(ramp.name, 'halfpipe');
    assert.equal(ramp.height, 12);
    assert.deepEqual(ramp.price, 8.50);
  });

  it.skip('should create a skater', function() {
    var skater = createSkater('Tony', 'Hawk');

    assert.equal(skater.firstName, 'Tony');
    assert.equal(skater.lastName, 'Hawk');
    assert.deepEqual(skater.tricks, []);
  });

  it.skip('should add a trick to a skater', function() {
    var skater = createSkater('Bob', 'Burnquist');
    addTrick(skater, 'ollie');
    addTrick(skater, 'kickflip');

    assert.deepEqual(skater.tricks, ['ollie', 'kickflip']);
  });

  it.skip('should list the tricks of a skater', function() {
    var skater = createSkater('Ryan', 'Sheckler');
    addTrick(skater, 'pop shove-it');
    addTrick(skater, '180 ollie');
    addTrick(skater, 'kickflip');

    var tricks = listTricks(skater);

    assert.deepEqual(tricks, 'Ryan Sheckler\'s tricks: pop shove-it, 180 ollie, kickflip');
  });

  it.skip('should remove a trick from a skater', function() {
    var skater = createSkater('Eric', 'Koston');
    addTrick(skater, 'grind');
    addTrick(skater, 'heelflip');
    removeTrick(skater, 'grind');

    assert.deepEqual(skater.tricks, ['heelflip']);
  });

  it.skip('should calculate the total cost of a ramp and a skater\'s tricks', function() {
    var ramp = createRamp('quarterpipe', 8, 5.00);
    var skater = createSkater('Andrew', 'Reynolds');
    addTrick(skater, 'nollie');
    addTrick(skater, 'kickflip');
    addTrick(skater, 'frontside flip');

    var total = calculateTotal(ramp, skater);

    assert.equal(total, 'The total cost is $13.50.');
  });
});