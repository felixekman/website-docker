import Ember from 'ember';
import RSVP from 'rsvp';
import JumpPageToTop from '../mixins/routes/jump-page-to-top';
import DynamicTitle from '../mixins/routes/dynamic-meta';

export default Ember.Route.extend(JumpPageToTop, DynamicTitle, {
    dynamicMetaModelPath: 'product',
    model() {
        return RSVP.hash({
            product: this.get('store').queryRecord('page', { 'fields.slug': 'product' }),
            features: this.get('store').query('feature', { 'order': 'fields.order' })
        });
    },
    setupController( controller ) {
        this._super(...arguments);
        let store = this.get('store');
        store.findAll('faq').then((faqs) => {
            controller.set('faqs', faqs);
        });
        store.query('testimonial', { 'fields.page': 'home' }).then(( testimonials ) => {
            controller.set('testimonials', testimonials);
        });
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
