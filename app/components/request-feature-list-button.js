import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: [ 'btnClassName' ],
    btnClassName: Ember.computed('btnClass', function () {
        return this.get('btnClass') || 'btn-primary';
    }),
    btnClass: null,
    attributeBindings: ['data-toggle', 'data-target'],
    "data-toggle": 'modal',
    "data-target": '#request-feature-list-form'
});
