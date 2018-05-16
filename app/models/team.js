import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    name: attr('string'),
    title: attr('string'),
    introduction: attr('string'),
    biography: attr('string')
});
