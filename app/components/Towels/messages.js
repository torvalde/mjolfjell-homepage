/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.Towels.title',
    defaultMessage: 'Hånkle',
  },
  description: {
    id: 'components.Towels.description',
    defaultMessage: '',
  },
  priceDescription: {
    id: 'components.Towels.priceDescription',
    defaultMessage: '{price, number} kr',
  },
  order: {
    id: 'components.Towels.order',
    defaultMessage: '{guestCount, number} {guestCount, plural, one {hånkle for 1 gjest} other {hånkler for # gjester}}',
  },
});
