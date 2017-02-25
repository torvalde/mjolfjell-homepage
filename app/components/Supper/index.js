/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import supper from './supper.jpg';

const price = 200;

export default function Supper(props,context) {
  let calculatedPrice = price * props.nightCount*props.guestCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{nightCount:props.nightCount,guestCount:props.guestCount});
  let title = context.intl.formatMessage(messages.title);
  let description = context.intl.formatMessage(messages.description);
  return <Product img={supper} totalPrice={calculatedPrice} price={priceDescription} value={props.value}
                  title={title} description={description} order={order} onClick={props.onClick} active={props.active}/>
};

Supper.propTypes = {
  value: PropTypes.number,
  nightCount: PropTypes.number,
  guestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Supper.contextTypes = {
  intl: React.PropTypes.object
};