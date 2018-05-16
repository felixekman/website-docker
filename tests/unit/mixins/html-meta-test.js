import Ember from 'ember';
import HtmlMetaMixin from 'harmony-psa/mixins/html-meta';
import { module, test } from 'qunit';

module('Unit | Mixin | html meta');

// Replace this with your real tests.
test('it works', function(assert) {
  let HtmlMetaObject = Ember.Object.extend(HtmlMetaMixin);
  let subject = HtmlMetaObject.create();
  assert.ok(subject);
});
