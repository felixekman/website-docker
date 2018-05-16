import Ember from 'ember';

export function testimonial(params) {
    return params[0].objectAt( params[1] );
}

export default Ember.Helper.helper(testimonial);
