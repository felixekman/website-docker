import Ember from 'ember';

var decoderTempElement;

if ( typeof document !== 'undefined' ) {
    decoderTempElement = document.createElement('div');
}

function decodeHTMLEntities(str) {
    if ( str && typeof str === 'string' ) {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');

        decoderTempElement.innerHTML = str;
        str = decoderTempElement.textContent;
        decoderTempElement.textContent = '';
    }
    return str;
}

export function decodeEntities(params) {
    if ( typeof document !== 'undefined' ) {
        return Ember.String.htmlSafe( decodeHTMLEntities(params[0]) );
    } else {
        return params[0];
    }
}

export default Ember.Helper.helper(decodeEntities);
