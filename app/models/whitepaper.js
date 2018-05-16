import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    description: attr('string'),
    coverImage: belongsTo('contentful-asset'),
    hubSpotFormId: attr('string'),
    hubSpotEmbedCode: attr('string')
});
