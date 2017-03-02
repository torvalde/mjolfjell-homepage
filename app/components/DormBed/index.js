/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import room from './room.jpg';

const price = 850;
const childDiscount = 200;

const type = DormBed.name;

export default function DormBed(props,context) {
  let calculatedPrice = price * props.nightCount * (props.adultGuestCount+props.childGuestCount);
  let calculatedDiscount = childDiscount * props.nightCount * props.childGuestCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{nightCount:props.nightCount,guestCount:(props.adultGuestCount+props.childGuestCount)});
  let title = context.intl.formatMessage(messages.title);
  let description = context.intl.formatMessage(messages.description);
  return <Product img={room} totalPrice={calculatedPrice} price={priceDescription}
                  totalDiscount={calculatedDiscount} value={props.value} title={title} order={order} onClick={props.onClick}
                  active={props.active} description={description}/>
};

DormBed.propTypes = {
  value: PropTypes.number,
  nightCount: PropTypes.number,
  adultGuestCount: PropTypes.number,
  childGuestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

DormBed.contextTypes = {
  intl: React.PropTypes.object
};