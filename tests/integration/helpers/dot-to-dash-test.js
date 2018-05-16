
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dot-to-dash', 'helper:dot-to-dash', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{dot-to-dash inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

