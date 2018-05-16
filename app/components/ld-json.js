import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'script',
    attributeBindings: ['type'],
    type: 'application/ld+json',
    json: null
});
