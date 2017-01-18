/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import supper from './transport.jpg';

const price = 200;

export default function Transport(props,context) {
  let calculatedPrice = price;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{nightCount:props.nightCount,guestCount:props.guestCount});
  let title = context.intl.formatMessage(messages.title);
  return <Product img={supper} value={Transport.name} totalPrice={calculatedPrice} price={priceDescription}
                  title={title} description="" order={order} onClick={props.onClick} active={props.active}/>
};

Transport.propTypes = {
  nightCount: PropTypes.number,
  guestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Transport.contextTypes = {
  intl: React.PropTypes.object
};