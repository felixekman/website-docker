import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('news');
  },
  setupController( controller, model ) {
    this._super(...arguments);
    controller.set('featuredArticle', model.get('firstObject'));
    controller.set('secondaryArticles', model.slice(1));
  }
});
