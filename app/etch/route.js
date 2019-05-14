import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  spotify: Ember.inject.service('spotify-api'),

  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('spotify').tracks(params.search);
    // this.get('currentUser').loadCurrentUser();
  }
});
