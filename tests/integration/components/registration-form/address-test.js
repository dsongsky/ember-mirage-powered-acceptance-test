import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registration-form/address', 'Integration | Component | registration form/address', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registration-form/address}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#registration-form/address}}
      template block text
    {{/registration-form/address}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
