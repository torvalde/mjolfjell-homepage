/* @flow */

import React, {Children, PropTypes} from 'react';
import styled from 'styled-components';

//'#a9a9a9'
const Wrapper = styled.div`

`;


class ExtrasSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected:{}};
  }

  onSelect = (value, order, total) => {
    let newSelected = Object.assign({}, this.state.selected);

    if (!newSelected[value]) {
      newSelected[value] = {value, text: order, total};
    } else {
      newSelected[value] = undefined;
    }

    this.setState({selected: newSelected});

    this.props.onChange(Object.entries(newSelected).reduce((array, entry) => entry[1]?array.concat(entry[1]):array, []));
  };

  render = () => {
    const clickableChildren = Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onClick: this.onSelect, active: this.state.selected[child.props.value]
      })
    );

    return <Wrapper>{clickableChildren}</Wrapper>;
  }
}

ExtrasSelector.propTypes = {
  onChange: PropTypes.func
};

export default ExtrasSelector;