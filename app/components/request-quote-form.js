import Ember from 'ember';
import HubSpotFormMixin from '../mixins/components/hubspot-form';

export default Ember.Component.extend(HubSpotFormMixin, {
    classNames: ['modal', 'fade'],
    attributeBindings: ['id', 'tabindex', 'role', 'aria-hidden'],
    id: 'request-quote-form',
    tabindex: -1,
    role: "dialog",
    "aria-hidden": "true",
    targetId: 'request-quote-form-wrapper',
    portalId: '3965515',
    formId: '7c586089-86d2-47d9-99c4-cb8c267fdb8f',
    eventName: 'quote-form'
});
