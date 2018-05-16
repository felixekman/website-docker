import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('request-quote-form', 'Integration | Component | request quote form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{request-quote-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#request-quote-form}}
      template block text
    {{/request-quote-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
