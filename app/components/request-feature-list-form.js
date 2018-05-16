import Ember from 'ember';
import HubSpotFormMixin from '../mixins/components/hubspot-form';

export default Ember.Component.extend(HubSpotFormMixin, {
    classNames: ['modal', 'fade'],
    attributeBindings: ['id', 'tabindex', 'role', 'aria-hidden'],
    id: 'request-feature-list-form',
    tabindex: -1,
    role: "dialog",
    "aria-hidden": "true",
    targetId: 'request-feature-list-form-wrapper',
    portalId: '3965515',
    formId: '126b66cc-b92f-4e16-826a-710205142dd2',
    eventName: 'feature-list-form'
});
