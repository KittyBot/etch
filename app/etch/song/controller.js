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
        const memory = this.store.createRecord('memory', {
          ...formValues,
          trackId: spotifyTrack.id,
        });

        memory.save().then(() => {
          this.transitionToRoute('admin.friends.memories', this.get('currentUser.user.id'));
        })
    }
  },

  emotions: [
    'clap',
    'grinning',
    'heart_eyes',
    'yum',
    'dancer_tone3',
    'thinking',
    'cry',
    'nauseated_face',
    'metal',
  ]
});
