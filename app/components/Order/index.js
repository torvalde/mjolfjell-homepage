/* @flow */

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
    overflow: auto;
    padding: 0 20px;
    background: #64E9EE;
    width: 100%;
    text-align: left;
    padding: 40px;
    h2 {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
    table {
      width: 500px;
      margin: 50px auto;
      tr td:last-child {
        text-align:right;
      }
    }
    form {
        width: 400px;
        margin: 0 auto;
        label {
          overflow-x:visible;
        }
    }
`;

const Center = styled.div`
    text-align: center;
`;

const SummaryRow = styled.tr`
  td {
    padding-top: 20px;
    font-weight: 600;
  }
`;

export default function Order(props) {
  let rows = [];

  var total = 0;

  if (props.room) {
    total += props.room.total;
    rows.push(<tr key="room"><td>{props.room.text}</td><td>{props.room.total} kr</td></tr>);
  }

  if (props.extras) {
    props.extras.forEach(function(extra, i) {
      total += extra.total;
      rows.push(<tr key={i}><td>{extra.text}</td><td>{extra.total} kr</td></tr>);
    });
  }

  rows.push(<SummaryRow key="total"><td>Total</td><td>{total} kr</td></SummaryRow>);

  return <Wrapper>
    <h2><FormattedMessage {...messages.title}/></h2>
    <table>
      <tbody>
      {rows}
      </tbody>
    </table>
    <form>
      <Input label="Navn" floatingLabel={true} required={true} type="text"/>
      <Input label="E-post" floatingLabel={true} required={true} type="email" />
      <Input label="Telefon" floatingLabel={true} required={true} type="tel" />
      <Center>
      <Button size="large" variant="raised"><FormattedMessage {...messages.send} /></Button>
      </Center>
    </form>
  </Wrapper>;
}

Order.propTypes = {
  room: PropTypes.object,
  extras: PropTypes.array
};