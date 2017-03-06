/**
 *
 * PersonSelector
 */

import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import DownArrow from './DownArrow';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const Selector = styled.select`
    background: transparent;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    border-radius: 0;
    -webkit-appearance: none;
    padding-right: 30px;
    &:focus {
        outline: none;
        border-bottom: 1px solid lightskyblue;
    }
    option {
      color: black;
    }
`;


function PersonSelector(props) {
  let options = []; // [...Array(props.max).keys()].map(v => start+v);
  let person = props.child?messages.child:messages.adult;
  for (let persons = props.min; persons < props.max; persons++) {
    options.push(<option value={persons} key={persons}><FormattedMessage {...person} values={{persons}}/></option>);
  }
  let onChange = function(event) {
    props.setCount(parseInt(event.target.value));
  };
  return (
    <Wrapper>
      <Selector defaultValue={props.selected||0} onChange={onChange}>
        {options}
      </Selector>
      <DownArrow/>
    </Wrapper>
  );
}

PersonSelector.defaultProps = {
  min: 0,
  max: 8,
};

PersonSelector.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  selected: PropTypes.number,
  child: PropTypes.bool,
  setCount: PropTypes.func
};

export default PersonSelector;