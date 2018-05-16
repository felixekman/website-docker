import Ember from 'ember';

export function objectAt(params) {
    return params[0].objectAt( params[1] );
}

export default Ember.Helper.helper(objectAt);
