import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('request-demo-form', 'Integration | Component | request demo form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{request-demo-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#request-demo-form}}
      template block text
    {{/request-demo-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
