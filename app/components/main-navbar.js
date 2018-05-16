import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'nav',
    classNames: ['navbar', 'navbar-expand-lg', 'navbar-light'],
    routing: Ember.inject.service('-routing')
});
