import Ember from 'ember';
import attr from 'ember-data/attr';

export default Ember.Mixin.create({
    structuredDataJson: attr('json'),
    htmlPageTitle: attr('string'),
    htmlMetaDescription: attr('string')
});
