import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  didTransition() {
      this._super(...arguments);
      if ( typeof Ember.$ === 'function' ) {
          if ( this.get('currentRouteName') && this.get('currentRouteName').match(/solutions/) ) {
              Ember.$('#solutionsMenu').addClass('active');
          } else {
              Ember.$('#solutionsMenu').removeClass('active');
          }
      }
  }
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('solutions', function() {
    this.route('msp');
    this.route('isv');
    this.route('var');
    this.route('ps');
  });
  this.route('resources', function() {
    this.route('blog');
    this.route('whitepapers');
    this.route('video');
    this.route('news');
  });
  this.route('product');
  this.route('about');
  this.route('contact');
  this.route('pricing');
  this.route('rick-roll');
  this.route('privacy-policy');
  this.route('terms');
  this.route('e404', { path: '*' });
});

export default Router;
