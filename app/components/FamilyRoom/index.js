/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import family from './family.jpg';

const price = 2750;

export default function FamilyRoom(props,context) {
  let calculatedPrice = price * props.nightCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{nightCount:props.nightCount,guestCount:props.guestCount});
  let title = context.intl.formatMessage(messages.title);
  return <Product img={family} totalPrice={calculatedPrice} price={priceDescription} value={props.value}
                  title={title} order={order} onClick={props.onClick} active={props.active}/>
};

FamilyRoom.propTypes = {
  value: PropTypes.number,
  nightCount: PropTypes.number,
  guestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

FamilyRoom.contextTypes = {
  intl: React.PropTypes.object
};