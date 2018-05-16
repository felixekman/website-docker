import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    introduction: attr('string'),
    harmonyQuote: attr('string'),
    partnerQuote: attr('string'),
    logo: belongsTo('contentful-asset')
});
