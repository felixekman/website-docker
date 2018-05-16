import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    title: attr('string'),
    content: attr('string'),
    image: belongsTo('contentful-asset'),
});
