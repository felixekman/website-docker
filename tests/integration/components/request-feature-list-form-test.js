import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('request-feature-list-form', 'Integration | Component | request feature list form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{request-feature-list-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#request-feature-list-form}}
      template block text
    {{/request-feature-list-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
