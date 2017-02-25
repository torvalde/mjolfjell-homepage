/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import towel from './towel.jpg';

const price = 20;

export default function Towels(props,context) {
  let calculatedPrice = price * props.guestCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{guestCount:props.guestCount});
  let title = context.intl.formatMessage(messages.title);
  let description = context.intl.formatMessage(messages.description);
  return <Product img={towel} totalPrice={calculatedPrice} price={priceDescription} value={props.value}
                  title={title} description={description} order={order} onClick={props.onClick} active={props.active}/>
};

Towels.propTypes = {
  value: PropTypes.number,
  nightCount: PropTypes.number,
  guestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Towels.contextTypes = {
  intl: React.PropTypes.object
};