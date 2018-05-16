import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    title: attr('string'),
    value: attr('string'),
    colour: attr('string'),
    position: attr('number')
});
