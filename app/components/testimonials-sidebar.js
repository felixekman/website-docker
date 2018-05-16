import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    classNames: ['testimonials-sidebar'],
    bgClass: 'bg-warning',
    dark: false,
    testimonials: []
});
