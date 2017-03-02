/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'components.Sheets.title',
    defaultMessage: 'Hånkle',
  },
  description: {
    id: 'components.Sheets.description',
    defaultMessage: '',
  },
  priceDescription: {
    id: 'components.Sheets.priceDescription',
    defaultMessage: '{price, number} kr',
  },
  order: {
    id: 'components.Sheets.order',
    defaultMessage: 'Ekstra for laken og hånkle',
  },
});
