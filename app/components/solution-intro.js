import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['card', 'border-light', 'bg-transparent', 'transition-spin-in'],
    classNameBindings: ['transitionDelayClass'],
    transitionDelayClass: Ember.computed('transitionDelay', function () {
        return 'transition-delay-' + this.get('transitionDelay');
    }),
    transitionDelay: 0,
    solution: null,
    icon: Ember.computed('solution.slug', function () {
        return 'solutions-icon-' + this.get('solution.slug');
    }),
    route: Ember.computed('solution.slug', function () {
        return 'solutions.' + this.get('solution.slug');
    })
});
