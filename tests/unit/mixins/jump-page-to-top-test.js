import Ember from 'ember';
import JumpPageToTopMixin from 'harmony-psa/mixins/jump-page-to-top';
import { module, test } from 'qunit';

module('Unit | Mixin | jump page to top');

// Replace this with your real tests.
test('it works', function(assert) {
  let JumpPageToTopObject = Ember.Object.extend(JumpPageToTopMixin);
  let subject = JumpPageToTopObject.create();
  assert.ok(subject);
});
