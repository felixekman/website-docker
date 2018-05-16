import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    question: attr('string'),
    answer: attr('string')
});
