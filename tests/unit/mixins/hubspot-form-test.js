import Ember from 'ember';
import HubspotFormMixin from 'harmony-psa/mixins/hubspot-form';
import { module, test } from 'qunit';

module('Unit | Mixin | hubspot form');

// Replace this with your real tests.
test('it works', function(assert) {
  let HubspotFormObject = Ember.Object.extend(HubspotFormMixin);
  let subject = HubspotFormObject.create();
  assert.ok(subject);
});
