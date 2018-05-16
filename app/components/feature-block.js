import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['card', 'feature-block'],
    attributeBindings: ['data-toggle', 'data-target'],
    "data-toggle": "modal",
    "data-target": "#request-feature-list-form",
    hlight: Ember.computed('feature.function', function () {
        switch ( this.get('feature.function') ) {
            case 'sales (yellow)':
                return 'yellow';
            case 'operations (blue)':
                return 'blue';
            case 'finance (red)':
                return 'red';
        }
    }),
    feature: null
});
