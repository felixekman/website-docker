import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    classNames: ['carousel', 'slide', 'home-feature-carousel'],
    slideIndex: 0,
    slideIndexObserver: Ember.observer('slideIndex', function () {
        let slideIndex = this.get('slideIndex');
        this.$().carousel( slideIndex ).carousel('pause');
    }),
    features: [],
    actions: {
        goToSlide( slideIndex ) {
            this.set('slideIndex', slideIndex);
        }
    },
    didInsertElement() {
        this.$().carousel({
            keyboard: false,
            wrap: true,
            pause: false,
            ride: "false"
        }).carousel('pause');
    }
});
