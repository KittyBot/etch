import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  name: DS.attr('string'),
  username: DS.attr('string'),

  profilePicUrl: DS.attr('string'),
    memories: DS.hasMany('memory'),
  fullProfilePicUrl: Ember.computed('profilePicUrl', function() {
    return `http://localhost:3333/uploads/${this.get('profilePicUrl')}`
  }),
});
