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
    position: relative;
    h2 {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
    table {
      width: 100%;
      max-width: 500px;
      margin: 50px auto;
      tr td:last-child {
        text-align:right;
      }
      @media only screen and (max-width : 768px) {
        max-width: none;
      }
    }
    form {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        label {
          overflow-x:visible;
        }
            @media only screen and (max-width : 768px) {
                    max-width: none;
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

const Info = styled.div`
  font-size: 14px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default function Order(props, context) {
  let sendOrder = function () {
    emailjs.send("default_service","template_oq3smkkp",{name: "James", notes: "Check this out!"})
      .then(function(response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function(err) {
        console.log("FAILED. error=", err);
      });
  };

  let rows = [];

  let total = 0;

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

  if (total==0) {
    rows.push(<tr><td style={{textAlign: 'left'}}><FormattedMessage {...messages.empty}/></td></tr>);
  } else {
    rows.push(<SummaryRow key="total">
      <td>Total</td>
      <td>{total} kr</td>
    </SummaryRow>);
  }

  return <Wrapper>
    <h2><FormattedMessage {...messages.title}/></h2>
    <table>
      <tbody>
      {rows}
      </tbody>
    </table>
    <form>
      <Input label={context.intl.formatMessage(messages.name)} floatingLabel={true} required={true} type="text"/>
      <Input label={context.intl.formatMessage(messages.email)} floatingLabel={true} required={true} type="email" />
      <Input label={context.intl.formatMessage(messages.phone)} floatingLabel={true} required={true} type="tel" />
      <Info>
        <FormattedMessage {...messages.info}/>
      </Info>
      <Center>
      <Button size="large" variant="raised" onClick={sendOrder}><FormattedMessage {...messages.send} /></Button>
      </Center>
    </form>
  </Wrapper>;
}

Order.propTypes = {
  room: PropTypes.object,
  extras: PropTypes.array
};

Order.contextTypes = {
  intl: React.PropTypes.object
};