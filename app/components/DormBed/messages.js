/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.DormBed.title',
    defaultMessage: 'Seng på vandrehjemmet',
  },
  description: {
    id: 'components.DormBed.description',
    defaultMessage: 'En lakenpakke vil bli lagt til, må fornyes hver 3 dag (100 kr).',
  },
  priceDescription: {
    id: 'components.DormBed.priceDescription',
    defaultMessage: '{price, number} kr pr natt',
  },
  order: {
    id: 'components.DormBed.order',
    defaultMessage: `{guestCount, number} {guestCount, plural, one {seng} other {senger}} for {nightCount, number} {nightCount, plural, one {natt} other {netter}}`
  }
});
