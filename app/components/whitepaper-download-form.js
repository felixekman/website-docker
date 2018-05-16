import Ember from 'ember';
import HubSpotFormMixin from '../mixins/components/hubspot-form';

export default Ember.Component.extend(HubSpotFormMixin, {
    classNames: ['modal', 'fade'],
    attributeBindings: ['id', 'tabindex', 'role', 'aria-hidden'],
    tabindex: -1,
    role: "dialog",
    "aria-hidden": "true",
    eventName: 'download-whitepaper-form',
    targetId: Ember.computed('id', function () {
        return this.get('id') + '-wrapper';
    })
});
