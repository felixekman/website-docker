import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('whitepaper-download', 'Integration | Component | whitepaper download', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{whitepaper-download}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#whitepaper-download}}
      template block text
    {{/whitepaper-download}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
