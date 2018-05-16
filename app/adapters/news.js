import Ember from 'ember';
import DS from 'ember-data';

const HUBSPOT_NEWS_FEED_URL = "https://blog.harmonypsa.com/news/rss.xml";

export default DS.Adapter.extend({
    findAll() {
        if ( typeof Ember.$ !== 'undefined' ) {
            return new Ember.RSVP.Promise(function(resolve, reject) {
                Ember.$.get(HUBSPOT_NEWS_FEED_URL).then(function(data) {
                    resolve(data);
                }, function(jqXHR) {
                    reject(jqXHR);
                });

            });
        } else {
            return { data: [] };
        }
    }
});
