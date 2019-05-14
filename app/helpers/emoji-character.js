import Ember from 'ember';
import emojione from 'emojione';

export function emojiCharacter([name]/*, hash*/) {
  const image = emojione.shortnameToImage(`:${name}:`);

  return Ember.String.htmlSafe(image);
}

export default Ember.Helper.helper(emojiCharacter);
