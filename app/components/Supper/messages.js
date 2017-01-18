/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.Supper.title',
    defaultMessage: 'Ærnæringsrik kraftaftens med søt avslutning',
  },
  priceDescription: {
    id: 'components.Supper.priceDescription',
    defaultMessage: '{price, number} kr',
  },
  order: {
    id: 'components.Supper.order',
    defaultMessage: 'Ærnæringsrik kraftaftens med søt avslutning {guestCount, plural, one {for 1 gjest} other {for # gjester}} i {nightCount, plural, one {1 natt} other {# netter}}',
  },
});
