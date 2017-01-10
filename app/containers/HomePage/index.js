/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import bg from './fjell.jpg';

const Title = styled.h1`
  font-size: 20vh;
  text-align: center;
  color: palevioletred;
  padding-top: 40vh;
`;

const Frontpage = styled.div`
  background: url(${bg}) 0 0 no-repeat;
  background-size: 'cover';
  width: 100%;
  height: 100vh;
`;

export default class HomePage extends React.Component { // React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Frontpage>
          <Title>
            MJØLFJELL
          </Title>
        </Frontpage>
      <section>hkhj</section>
      </main>
    );
  }
}
