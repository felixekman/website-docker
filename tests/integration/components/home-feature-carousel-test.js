import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-feature-carousel', 'Integration | Component | home feature carousel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-feature-carousel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#home-feature-carousel}}
      template block text
    {{/home-feature-carousel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
