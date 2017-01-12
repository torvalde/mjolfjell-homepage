/**
 *
 * ChildSelector
 */

import React, { PropTypes, Children } from 'react';

import PersonSelector from 'components/PersonSelector';


function ChildSelector(props) {
  return (
    <PersonSelector name="childCount">
      <option value="0">Ingen barn</option>
      <option value="1">Ett barn</option>
      <option value="2">2 barn</option>
      <option value="3">3 barn</option>
      <option value="4">4 barn</option>
      <option value="5">5 barn</option>
      <option value="6">6 barn</option>
      <option value="7">7 barn</option>
      <option value="8">8 barn</option>
    </PersonSelector>
  );
}

ChildSelector.propTypes = {
  onChange: PropTypes.func
};

export default ChildSelector;