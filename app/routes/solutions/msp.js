import Ember from 'ember';
import JumpPageToTop from '../../mixins/routes/jump-page-to-top';
import DynamicTitle from '../../mixins/routes/dynamic-meta';

export default Ember.Route.extend(JumpPageToTop, DynamicTitle, {
    model() {
        return this.get('store').queryRecord('solution', { 'fields.slug': 'msp' });
    },
    setupController( controller ) {
        this._super(...arguments);
        let store = this.get('store');
        store.findAll('blog').then((blog) => {
            controller.set('blog', blog.slice(0, 3));
        });
        store.query('whitepaper', { 'limit': 3 }).then(( whitepapers ) => {
            controller.set('whitepapers', whitepapers);
        });
        store.query('video', { 'limit': 3 }).then(( videos ) => {
            controller.set('videos', videos);
        });
    }
});
