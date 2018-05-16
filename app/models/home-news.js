import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    bulletin: attr('string'),
    date: attr('date')
});
