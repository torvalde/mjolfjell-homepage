/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  adult: {
    id: 'app.components.PersonSelector.adult',
    defaultMessage: `{persons, plural, =0 {ingen voksne} one {one adult} other {# voksne}}`,
  },
  child: {
    id: 'app.components.PersonSelector.child',
    defaultMessage: `{persons, plural, =0 {ingen barn} other {# barn}}`,
  },
});