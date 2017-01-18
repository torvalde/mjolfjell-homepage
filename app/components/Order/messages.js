/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.Order.title',
    defaultMessage: `Din ordre`,
  },
  send: {
    id: 'app.components.Order.send',
    defaultMessage: `Send order`,
  },
  name: {
    id: 'app.components.Order.name',
    defaultMessage: `Navn`,
  },
  email: {
    id: 'app.components.Order.email',
    defaultMessage: `Epost`,
  },
  phone: {
    id: 'app.components.Order.phone',
    defaultMessage: `Telefon`,
  },
  info: {
    id: 'app.components.Order.info',
    defaultMessage: 'Etter å ha motatt din bestilling vil vi kontakte deg for å avklare betaling. Alle prisene er i NOK.'
  },
  empty: {
    id: 'app.components.Order.empty',
    defaultMessage: 'Din bestilling er tom, velg overnatting fra seksjonen over.'
  }
});