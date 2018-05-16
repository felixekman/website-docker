import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').query('video', { limit: 5 });
    },
    setupController( controller, model ) {
        controller.set('featuredVideo', model.get('firstObject'));
        controller.set('secondaryVideos', model.slice(1));
    }
});
