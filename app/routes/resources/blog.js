import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').findAll('blog');
    },
    setupController( controller, model ) {
        this._super(...arguments);
        controller.set('featuredBlog', model.get('firstObject'));
        controller.set('secondaryBlogs', model.slice(1));
    }
});
