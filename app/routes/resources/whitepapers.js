import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model() {
        return RSVP.hash({
            whitepapers: this.get('store').query('whitepaper', { limit: 5 }),
            webinars: this.get('store').query('webinar', { limit: 2 })
        });
    },
    setupController( controller, model ) {
        this._super(...arguments);
        controller.set('featuredWhitepaper', model.whitepapers.get('firstObject'));
        controller.set('secondaryWhitepapers', model.whitepapers.slice(1));
        controller.set('featuredWebinar', model.webinars.get('firstObject'));
    }
});
