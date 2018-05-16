import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fixed-side-buttons', 'Integration | Component | fixed side buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fixed-side-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fixed-side-buttons}}
      template block text
    {{/fixed-side-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
