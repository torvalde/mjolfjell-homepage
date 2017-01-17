/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import towel from './towel.jpg';

const price = 20;

export default function Towels(props,context) {
  let calculatedPrice = price * props.nightCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{nightCount:props.nightCount,guestCount:props.guestCount});
  let title = context.intl.formatMessage(messages.title);
  return <Product img={towel} value={Towels.name} totalPrice={calculatedPrice} price={priceDescription}
                  title={title} description="" order={order} onClick={props.onClick} active={props.active}/>
};

Towels.propTypes = {
  nightCount: PropTypes.number,
  guestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Towels.contextTypes = {
  intl: React.PropTypes.object
};