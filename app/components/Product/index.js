/**
 *
 * PersonSelector
 */

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Checkbox from 'components/Checkbox';

const Label = styled.div`
  width: 450px;
  height: 320px;
  display: inline-block;
  margin-right: 30px;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
  cursor: pointer;
  @media only screen and (max-width : 768px) {
    width: 100%;
    margin-right: 0;
    height: 0;
    padding-bottom: 75%;
  }
`;

const Price = styled.span`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: #99AEBE;
    padding: 5px 15px 5px 15px;
    border-bottom-left-radius: 5px;
    opacity: .9;
    font-size: 22px;
`;

const Description = styled.div`
  padding-top: 12px;
  font-size: 18px;
  line-height: 22px;
  margin-right: 30px;
  font-size: 1.5rem;
  line-height: 22px;
  margin: 0;
  max-width: 420px;
  @media only screen and (max-width : 768px) {
      max-width: none;
  }
`;

const DescriptionHeader = styled.div`
  font-size: 20px;
  line-height: 22px;
  margin: 0;
  font-weight: normal;
`;


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  mouseOver = () => {
    if (!('ontouchstart' in document.documentElement)) {
      this.setState({hover: true});
    }
  };

  mouseOut = () => {
    if (!('ontouchstart' in document.documentElement)) {
      this.setState({hover: false});
    }
  };

  onClick = () => {
    this.props.onClick(this.props.value, this.props.order, this.props.totalPrice, this.props.totalDiscount);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.active && (this.props.value != prevProps.value || this.props.order != prevProps.order ||
      this.props.totalPrice != prevProps.totalPrice || this.props.totalDiscount != prevProps.totalDiscount)) {
      this.props.onClick(this.props.value, this.props.order, this.props.totalPrice, this.props.totalDiscount);
    }
  };

  render = () => {
    let labelStyle = {
      background: `url(${this.props.img}) center center no-repeat`,
      backgroundSize: 'cover'
    };
    return (
      <Wrapper>
        <Label style={labelStyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick}>
          <Price>{this.props.price}</Price>
          <Checkbox active={this.props.active} hover={this.state.hover}/>
        </Label>
        <Description>
          <DescriptionHeader>{this.props.title}</DescriptionHeader>
          {this.props.description}
        </Description>
      </Wrapper>
    );
  }
}

Product.propTypes = {
  active: PropTypes.bool,
  order: PropTypes.string,
  value: PropTypes.number,
  img: PropTypes.string,
  price: PropTypes.string,
  totalPrice: PropTypes.number,
  totalDiscount: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default Product;