import Ember from 'ember';
import DS from 'ember-data';

function getInnerHtmlForKey(item, key) {
    return item.getElementsByTagName(key).item(0).innerHTML;
}

export default DS.Serializer.extend({
    normalizeResponse(store, primaryModelClass, payload) {
        let json = {
            data: []
        };
        if ( typeof Ember.$ !== 'undefined' && payload && payload.nodeType === 9 ) { // ensure we have a XML document
            let items = payload.getElementsByTagName('item');
            for ( let n=0; n < items.length; n++ ) {
                let item = items.item(n),
                    jsonDataItem = {
                        'type': 'blog',
                        'id': getInnerHtmlForKey(item, 'guid'),
                        'attributes': {
                            'title': getInnerHtmlForKey(item, 'title'),
                            'content': getInnerHtmlForKey(item, 'description'),
                            'url': getInnerHtmlForKey(item, 'guid')
                        }
                    };
                json.data.pushObject(jsonDataItem);
            }
        }
        return json;
    }
});
