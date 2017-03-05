/* @flow */

import React, {Children, PropTypes} from 'react';
import styled from 'styled-components';
import FamilyRoom from 'components/FamilyRoom';
import DormBed from 'components/DormBed';

//'#a9a9a9'
const Wrapper = styled.div`

`;

class RoomSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSelect = (value, order, total, discount, type) => {
    console.log(value);
    if (this.state.selected != value) {
      this.setState({selected: value});
    }
    this.props.onChange({text: order, total, discount, type});
  };
  render = () => {
    const clickableChildren = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        value: i, onClick: this.onSelect, active: (i==this.state.selected)
      });
    });
    return <Wrapper>{clickableChildren}</Wrapper>;
  }
}

RoomSelector.propTypes = {
  onChange: PropTypes.func
};

export default RoomSelector;