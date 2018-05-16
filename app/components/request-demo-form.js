import Ember from 'ember';
import HubSpotFormMixin from '../mixins/components/hubspot-form';

export default Ember.Component.extend(HubSpotFormMixin, {
    classNames: ['modal', 'fade'],
    attributeBindings: ['id', 'tabindex', 'role', 'aria-hidden'],
    id: 'request-demo-form',
    tabindex: -1,
    role: "dialog",
    "aria-hidden": "true",
    targetId: 'request-demo-form-wrapper',
    portalId: '3965515',
    formId: '538bcd90-7989-4eef-a150-7bb183fca5be',
    eventName: 'demo-form'
});
