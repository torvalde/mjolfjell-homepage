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
  onSelect = (type, order, total) => {
    if (this.state.selected != type) {
      this.setState({selected: type});
      this.props.onChange({text: order, total});
    }
  };
  render = () => {
    const clickableChildren = Children.map(this.props.children,
      (child) => React.cloneElement(child, {
          onClick: this.onSelect, active: child.type.name == this.state.selected
        }));

    return <Wrapper>{clickableChildren}</Wrapper>;
  }
}

RoomSelector.propTypes = {
  onChange: PropTypes.func
};

export default RoomSelector;