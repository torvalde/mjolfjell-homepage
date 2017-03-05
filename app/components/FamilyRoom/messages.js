/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.FamilyRoom.title',
    defaultMessage: 'Rom på hotellet (4 senger)',
  },
  description: {
    id: 'components.FamilyRoom.description',
    defaultMessage: 'En frokostpakke vil bli lagt til, 150 kr pr gjest pr dag.',
  },
  priceDescription: {
    id: 'components.FamilyRoom.priceDescription',
    defaultMessage: '{price, number} kr pr rom',
  },
  order: {
    id: 'components.FamilyRoom.order',
    defaultMessage: `{guestCount, number} {guestCount, plural, one {gjest} other {gjester}} for {nightCount, number} {nightCount, plural, one {natt} other {netter}} i {roomCount, number} {roomCount, plural, one {privat 4-mannsrom} other {private 4-mannsrom}} `
  }
});
