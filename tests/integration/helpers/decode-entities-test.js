
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('decode-entities', 'helper:decode-entities', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{decode-entities inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

