import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('call-to-action-sidebar', 'Integration | Component | call to action sidebar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{call-to-action-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#call-to-action-sidebar}}
      template block text
    {{/call-to-action-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
