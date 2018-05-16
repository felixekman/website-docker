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
    images: hasMany('contentful-asset'),
    reason1: attr('string'),
    reason2: attr('string'),
    reason3: attr('string'),
    reason4: attr('string'),
    reason5: attr('string'),
    reason6: attr('string'),
    reason7: attr('string'),
    introForHomepage: attr('string'),
    hubSpotLearnMoreEmbedCode: attr('string')
});
