import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['partner', 'tab-pane'],
    classNameBindings: ['show', 'active'],
    show: Ember.computed('active', function () {
        return this.get('active');
    }),
    active: false,
    attributeBindings: ['role', 'style'],
    role: 'tabpanel',
    style: Ember.computed(function () {
        let backgroundImage = this.get('backgroundImage');
        return Ember.String.htmlSafe('background-image: url(' + backgroundImage + ');');
    }),
    backgroundImage: null,
    partner: null,
});
