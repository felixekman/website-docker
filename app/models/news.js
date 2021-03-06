import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr(),
  url: DS.attr('string'),
  pubDate: DS.attr('date'), 
  author: DS.attr('string')
});
