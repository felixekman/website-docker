import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['btn-group-vertical', 'fixed-side-buttons'],
    attributeBindings: ['role'],
    role: 'group',
    actions: {
        triggerRequestModal( modalElementId ) {
            Ember.$(modalElementId).modal();
        }
    },
    didInsertElement() {
        this.$('[data-toggle="tooltip"]').tooltip();
    }
});
