import Ember from 'ember';

export function dotToDash(params/*, hash*/) {
    let stringParam = params[0];
    if ( stringParam ) {
        let parts = stringParam.split('.'),
            fullString = stringParam.replace('.', '-');
        return parts[0] + ' ' + fullString;
    }
}

export default Ember.Helper.helper(dotToDash);
