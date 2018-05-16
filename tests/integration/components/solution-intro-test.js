import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('solution-intro', 'Integration | Component | solution intro', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{solution-intro}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#solution-intro}}
      template block text
    {{/solution-intro}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
