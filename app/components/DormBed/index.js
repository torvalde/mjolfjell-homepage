/* @flow */

import React, {Children, PropTypes} from 'react';
import Product from 'components/Product';
import messages from './messages';
import room from './room.jpg';

const price = 850;

const type = DormBed.name;

export default function DormBed(props,context) {
  let calculatedPrice = price * props.nightCount * props.guestCount;
  let priceDescription = context.intl.formatMessage(messages.priceDescription,{price:price});
  let order = context.intl.formatMessage(messages.order,{nightCount:props.nightCount,guestCount:props.guestCount});
  let title = context.intl.formatMessage(messages.title);
  let description = context.intl.formatMessage(messages.description);
  return <Product img={room} totalPrice={calculatedPrice} price={priceDescription} value={props.value}
                  title={title} description={description} order={order} onClick={props.onClick} active={props.active}/>
};

DormBed.propTypes = {
  value: PropTypes.string,
  nightCount: PropTypes.number,
  guestCount: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

DormBed.contextTypes = {
  intl: React.PropTypes.object
};