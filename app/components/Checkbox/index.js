/* @flow */

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import check from './check.inline.svg';

const CheckboxIconSvg = styled.svg`
    width: 100%;
    height: 100%;
    fill: currentColor;
  `;

export default function Checkbox(props) {
  const Wrapper = styled.div`
  color: ${props.active?'blue':props.hover?'black':'#d6d6d6'};
  background: white;
  margin: 16px;
  border: 2px solid;
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 5px;
  pointer-events:none;
`;
  return <Wrapper>
    <CheckboxIconSvg>
      <use xlinkHref={check}/>
    </CheckboxIconSvg>
  </Wrapper>;
}

Checkbox.propTypes = {
  hover: PropTypes.bool,
  active: PropTypes.bool
};