import Ember from 'ember';

export default Ember.Mixin.create({
    targetId: null,
    portalId: '3965515',
    formId: null,
    eventName: 'hubspot-form',
    didInsertElement() {
        Ember.run.scheduleOnce('afterRender', this, function () {
            if ( typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Speed Insights') == -1 ) {
                let data = this.getProperties('targetId', 'portalId', 'formId', 'eventName');
                Ember.$.getScript('//js.hsforms.net/forms/v2.js', function () {
                    hbspt.forms.create({
                        target: '#' + data.targetId,
                        css: '',
                        portalId: data.portalId,
                        formId: data.formId,
						cssClass: 'LoNotSensitive',
						errorClass: 'LoNotSensitive',
                        onFormSubmit: function() {
                            ga('send', 'event', data.eventName, 'submission');
                        }
                    });
                });
            }
        });
    }
});