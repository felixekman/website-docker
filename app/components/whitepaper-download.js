import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn', 'btn-primary'],
    attributeBindings: ['data-toggle', 'data-target'],
    "data-toggle": 'modal',
    "data-target": Ember.computed('formId', function () {
        return '#' + this.get('formId');
    }),
    formId: null // modal whitepaper-download-form id
});
