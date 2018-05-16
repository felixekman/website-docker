import Ember from 'ember';

export default Ember.Component.extend({
    slideIndex: 0,
    onGoToSlide: null,
    features: [],
    actions: {
        triggerGoToSlide( slideIndex ) {
            this.sendAction('onGoToSlide', slideIndex);
        }
    }
});
