import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registration-form/date-of-birth', 'Integration | Component | registration form/date of birth', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registration-form/date-of-birth}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#registration-form/date-of-birth}}
      template block text
    {{/registration-form/date-of-birth}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
