import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  spotify: Ember.inject.service('spotify-api'),

  actions: {
    searchSong(term) {
      // updated to use spotify service
      return this.get('spotify').tracks(term);
      // return $.getJSON({
      //     url: 'https://api.spotify.com/v1/search',
      //     data: {
      //       q: term,
      //       type: 'track'
      //     },
      //   }).then((data) => {
      //     return data.tracks.items;
      //   });
    },

    saveMemory(spotifyTrack, formValues) {
      this.set('disabled', true);

      navigator.geolocation.getCurrentPosition((position => {
        const memory = this.store.createRecord('memory', {
          ...formValues,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          trackId: spotifyTrack.id,
        });

        memory.save().then(() => {
          this.transitionToRoute('admin.friends.memories', this.get('currentUser.user.id'));
        });
      }));
    }
  },

  emotions: [
    'heart_eyes',
    'grinning',
    'yum',
    'relaxed',
    'thinking',
    'frowning2',
    'neutral_face',
    'sleeping',
    'cry',
    'nauseated_face',
    'metal',
    'clap',
    'ok_hand',
  ]
});
