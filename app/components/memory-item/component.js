import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  didReceiveAttrs() {
    const trackId = this.get('memory.trackId');

    if (trackId) {
      $.getJSON(`https://api.spotify.com/v1/tracks/${trackId}`)
      .then((track) => {
        this.set('track', track);
        this.set('album', track.album.images[0]);
      });
    }

  },

});
