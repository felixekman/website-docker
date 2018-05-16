import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    classNames: ['resources-sidebar', 'pb-5', 'text-center'],
    articles: [],
    whitepapers: [],
    videos: []
});
