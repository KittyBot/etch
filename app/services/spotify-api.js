import Ember from 'ember';

const SPOTIFY_URL = 'https://api.spotify.com/v1/search';

export default Ember.Service.extend({


  get(id) {
    // TODO put function here for single track by id

  },
    // return $.getJSON({
    //   url: 'https://api.spotify.com/v1/tracks/{id}',
    //   data: {
    //     q: query,
    //     type: 'name'
    //   },
    //
    //   // // success: function(response) {
    //   // //   resultsPlaceholder.innerHTML = template(response);
    //   // }
    // }).then((data) => {
    //   return data.name.items;
    // });

  tracks(query) {
    const url = `${SPOTIFY_URL}?q=${query}&type=track`;
    return fetch(url)
    .then(res => res.json())
    .then(data => data.tracks.items);
  }
});

// document.getElementById('search-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     searchAlbums(document.getElementById('query').value);
// }, false);
