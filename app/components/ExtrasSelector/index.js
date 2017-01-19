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

  onSelect = (value, text, total) => {
    let newSelected = Object.assign({}, this.state.selected);

    if (!newSelected[value]) {
      newSelected[value] = {value, text, total};
    } else {
      newSelected[value] = undefined;
    }

    this.setState({selected: newSelected});

    this.props.onChange(Object.values(newSelected).reduce((array, val) => val?array.concat(val):array, []));
  };

  render = () => {
    const clickableChildren = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        value: i, onClick: this.onSelect, active: (!!this.state.selected[i])
      });
    });

    return <Wrapper>{clickableChildren}</Wrapper>;
  }
}

ExtrasSelector.propTypes = {
  onChange: PropTypes.func
};

export default ExtrasSelector;