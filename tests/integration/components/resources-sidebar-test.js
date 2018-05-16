import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resources-sidebar', 'Integration | Component | resources sidebar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resources-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resources-sidebar}}
      template block text
    {{/resources-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
