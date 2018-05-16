import Ember from 'ember';
import RSVP from 'rsvp';
import JumpPageToTop from '../mixins/routes/jump-page-to-top';
import DynamicTitle from '../mixins/routes/dynamic-meta';

export default Ember.Route.extend(JumpPageToTop, DynamicTitle, {
    dynamicMetaModelPath: 'about',
    model() {
        return RSVP.hash({
            about: this.get('store').queryRecord('page', { 'fields.slug': 'about' }),
            values: this.get('store').findAll('value'),
            team: this.get('store').findAll('team'),
            partners: this.get('store').findAll('partner'),
        });
    }
});
