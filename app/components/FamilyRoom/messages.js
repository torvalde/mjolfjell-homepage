/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.FamilyRoom.title',
    defaultMessage: 'Familie rom',
  },
  priceDescription: {
    id: 'components.FamilyRoom.priceDescription',
    defaultMessage: '{price, number} kr pr rom',
  },
  order: {
    id: 'components.FamilyRoom.order',
    defaultMessage: `{guestCount, number} {guestCount, plural, one {gjest} other {gjester}} for {nightCount, number} {nightCount, plural, one {natt} other {netter}} i et privat rom`
  }
});
