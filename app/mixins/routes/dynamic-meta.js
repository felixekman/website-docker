import Ember from 'ember';

export default Ember.Mixin.create({
    headData: Ember.inject.service(),

    // defaults
    title: 'HarmonyPSA',
    description: 'HarmonyPSA is the most complete professional services automation (PSA) package on the market. It is specifically designed for technology businesses and covers the entire quote to cash cycle as well as powerful ticketing and time tracking functionality.',

    titleSeparater: ' - ',
    dynamicMetaModelPath: null, // allows override for RSVP hash model objects
    afterModel(model) {
        this._super(...arguments);
        this.setTitle(model);
        this.setDescription(model);
    },
    setTitle(model) {
        const baseTitle = this.get('title');
        if ( typeof model === 'undefined' ) {
            this.set('headData.title', baseTitle);
            return;
        }
        const modelPath = this.get('dynamicMetaModelPath');
        const titleSeparater = this.get('titleSeparater');
        if ( typeof model[modelPath] !== 'undefined' ) {
            model = model[modelPath];
        }
        let title = model.get('htmlPageTitle');
        this.set('headData.title', title ? title + titleSeparater + baseTitle : baseTitle);
    },
    setDescription(model) {
        const baseDescription = this.get('description');
        if ( typeof model === 'undefined' ) {
            this.set('headData.description', baseDescription);
            return;
        }
        const modelPath = this.get('dynamicMetaModelPath');
        if ( typeof model[modelPath] !== 'undefined' ) {
            model = model[modelPath];
        }
        let description = model.get('htmlMetaDescription');
        this.set('headData.description', description ? description : baseDescription);
    }
});
