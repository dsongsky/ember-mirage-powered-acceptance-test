import { test } from 'qunit';
import moduleForAcceptance from 'mirage-pretender/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test');

test('visiting /test', function(assert) {

  console.log('server', server);
  let rentals = server.createList('rental', 10);
  console.log('rentals', rentals);
  visit('/test');

  andThen(function() {
    let $listings = findWithAssert('.listing');
    assert.equal(currentURL(), '/test');
    assert.equal($listings.length, 10);
  });
});

test('visiting /test', function(assert) {

  console.log('server', server);
  let rentals = server.createList('rental', 5);
  console.log('rentals', rentals);
  visit('/test');

  andThen(function() {
    let $listings = findWithAssert('.listing');
    assert.equal(currentURL(), '/test');
    assert.equal($listings.length, 5);
  });
});
