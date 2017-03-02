/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.Order.title',
    defaultMessage: `Din bestilling`,
  },
  send: {
    id: 'components.Order.send',
    defaultMessage: `Send bestilling`,
  },
  name: {
    id: 'components.Order.name',
    defaultMessage: `Navn`,
  },
  email: {
    id: 'components.Order.email',
    defaultMessage: `Epost`,
  },
  phone: {
    id: 'components.Order.phone',
    defaultMessage: `Telefon`,
  },
  info: {
    id: 'components.Order.info',
    defaultMessage: 'Etter å ha motatt din bestilling vil vi kontakte deg. Alle prisene er i NOK.'
  },
  empty: {
    id: 'components.Order.empty',
    defaultMessage: 'Din bestilling er tom, velg overnatting fra seksjonen over.'
  },
  childDiscount: {
    id: 'components.cOrder.hildDiscount',
    defaultMessage: 'Barnerabatt'
  }
});