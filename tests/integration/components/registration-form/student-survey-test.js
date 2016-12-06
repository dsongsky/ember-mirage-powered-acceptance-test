import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registration-form/student-survey', 'Integration | Component | registration form/student survey', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registration-form/student-survey}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#registration-form/student-survey}}
      template block text
    {{/registration-form/student-survey}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
