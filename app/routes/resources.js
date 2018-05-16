import Ember from 'ember';
import JumpPageToTop from '../mixins/routes/jump-page-to-top';
import DynamicTitle from '../mixins/routes/dynamic-meta';

export default Ember.Route.extend(JumpPageToTop, DynamicTitle, {
    model() {
        return this.get('store').queryRecord('page', { 'fields.slug': 'resources' });
    }
});
