/**
 *
 * AdultSelector
 */

import React, { PropTypes } from 'react';

import PersonSelector from 'components/PersonSelector';


function AdultSelector(props) {
  return (
    <PersonSelector name="adultCount">
      <option value="0">Ingen voksene</option>
      <option value="1">En voksen</option>
      <option value="2" selected>2 voksne</option>
      <option value="3">3 voksne</option>
      <option value="4">4 voksne</option>
      <option value="5">5 voksne</option>
      <option value="6">6 voksne</option>
      <option value="7">7 voksne</option>
      <option value="8">8 voksne</option>
    </PersonSelector>
  );
}

AdultSelector.propTypes = {
  onChange: PropTypes.func
};

export default AdultSelector;