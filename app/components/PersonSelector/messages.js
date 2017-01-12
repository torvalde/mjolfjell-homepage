/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  adult: {
    id: 'app.components.PersonSelector.adult',
    defaultMessage: `{persons, number} {persons, plural, zero {No adults}, one {adult} other {adults} }`,
  },
  child: {
    id: 'app.components.PersonSelector.child',
    defaultMessage: `{persons, number} {persons, plural, zero {No children}, one {child} other {children} }`,
  },
});