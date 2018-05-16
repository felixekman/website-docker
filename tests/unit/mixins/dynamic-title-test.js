import Ember from 'ember';
import DynamicTitleMixin from 'harmony-psa/mixins/dynamic-title';
import { module, test } from 'qunit';

module('Unit | Mixin | dynamic title');

// Replace this with your real tests.
test('it works', function(assert) {
  let DynamicTitleObject = Ember.Object.extend(DynamicTitleMixin);
  let subject = DynamicTitleObject.create();
  assert.ok(subject);
});
