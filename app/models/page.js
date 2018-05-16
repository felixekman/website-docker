import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import HtmlMeta from '../mixins/models/html-meta';

export default Contentful.extend(HtmlMeta, {
    name: attr('string'),
    slug: attr('string'),
    title: attr('string'),
    lead: attr('string'),
    contentArea1: attr('string'),
    contentArea2: attr('string'),
    contentArea3: attr('string'),
    contentArea4: attr('string'),
    contentArea5: attr('string'),
    contentArea6: attr('string'),
    contentArea7: attr('string'),
    contentArea8: attr('string'),
    images: hasMany('contentful-asset')
});
