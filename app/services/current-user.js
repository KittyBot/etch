import Ember from 'ember';

export default Ember.Service.extend({
  // Get other services we need for this to work
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  user: null,

  loadCurrentUser() {
    // Only load the current user if the session is logged in
    if (this.get('session.isAuthenticated')) {
      // Return currecnt promise for loading current user
    return this.get('store').queryRecord('user', {
      current: true,
    }).then((user) => {
      this.set('user', user);

      return user;
    });
    }
  }
});
