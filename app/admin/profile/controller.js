import Ember from 'ember';
import config from 'final-project-etch/config/environment';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),

  saveUser(uploadFile) {
    if (uploadFile) {
      const user = this.get('currentUser.user');
      const token = this.get('session.session.content.authenticated.token');

      return this.get('filesystem').fetch(`${config.DS.host}/api/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: { ...user.toJSON(), uploadFile },
      }).then((res) => res.json())
      .then((data) => {
        this.store.pushPayload(data);
        alert('Image Updated')
      });
    }
  },

  actions: {
    choosePic(formValues) {
      this.get('filesystem').prompt().then((upload) => {
        this.saveUser(upload[0]);
      });
    }
  }
});
