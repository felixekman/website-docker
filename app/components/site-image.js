import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'img',
    attributeBindings: ['src', 'alt'],
    src: Ember.computed('asset.file.url', function () {
        return this.get('asset.file.url');
    }),
    alt: Ember.computed('asset.title', function () {
        return this.get('asset.title');
    }),
    asset: null
});
