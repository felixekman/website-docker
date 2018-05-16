import Ember from 'ember';

export default Ember.Mixin.create({
    activate: function() {
        this._super(...arguments);
        // check jQuery exists for Fastboot
        if ( typeof Ember.$ === 'function' ) {
            Ember.$(window).scrollTop(0);
            Ember.$('.navbar-collapse').collapse('hide');
        }
    }
});
