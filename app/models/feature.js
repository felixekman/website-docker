import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    description: attr('string'),
    function: attr('string')
});
