import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('testimonials-sidebar', 'Integration | Component | testimonials sidebar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{testimonials-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#testimonials-sidebar}}
      template block text
    {{/testimonials-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
