import Ember from 'ember';

export function fetch(params) {
    return params[0].filter((item) => {
        return item.get( params[1] ) == params[2];
    }).get('firstObject');
}

export default Ember.Helper.helper(fetch);
