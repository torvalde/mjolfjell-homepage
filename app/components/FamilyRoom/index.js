/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import family from './family.jpg';

const price = 2500;
const childDiscount = 200;

export default function FamilyRoom(props,context) {
  let roomCount = (Math.floor((props.adultGuestCount+props.childGuestCount)/4)+1);
  let calculatedPrice = price * roomCount * props.nightCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{roomCount,nightCount:props.nightCount,guestCount:(props.adultGuestCount+props.childGuestCount)});
  let title = context.intl.formatMessage(messages.title);
  let description = context.intl.formatMessage(messages.description);
  return <Product img={family} totalPrice={calculatedPrice} price={priceDescription} value={props.value}
                  title={title} order={order} onClick={props.onClick} active={props.active}
                  totalDiscount={childDiscount*props.childGuestCount} description={description}/>
};

FamilyRoom.propTypes = {
  value: PropTypes.number,
  nightCount: PropTypes.number,
  adultGuestCount: PropTypes.number,
  childGuestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

FamilyRoom.contextTypes = {
  intl: React.PropTypes.object
};