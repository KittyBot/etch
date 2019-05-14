import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  actions: {
    login(formValues, resetForm) {
      const secretStuff = {
        identification: formValues.email,
        password: formValues.password,
      };

      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, secretStuff)
        .then(() => {
          return this.get('currentUser').loadCurrentUser();
        }).then(() => {
          this.transitionToRoute('admin');
        });
    },
  },
});
