import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function () {
    this.route('profile');
    this.route('friends', function() {
      this.route('profile', { path: '/:user_id/profile' });
      this.route('memories', { path: '/:user_id/memories' });
    });
  });

  this.route('login');

  this.route('signup');
  this.route('etch', function() {
    this.route('song');
    this.route('create');
    this.route('log');
  });
  this.route('popular');
  this.route('map');
  this.route('popup');
});

export default Router;
