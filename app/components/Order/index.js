/* @flow */

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
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
      margin-bottom: 50px;
    }
    table {
      width: 100%;
      max-width: 500px;
      margin: 0 auto 50px auto;
      tr td:last-child {
        min-width: 80px;
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

const Dates = styled.div`
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
`;

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", phone: ""};
  }

  sendOrder = (event) => {
    event.preventDefault();
    let total = 0;

    if (this.props.room) {
      total += this.props.room.total;
      if (this.props.room.discount>0) {
        total -= this.props.room.discount;
      }
      if (this.props.extras) {
        this.props.extras.forEach(function (extra, i) {
          total += extra.total;
        });
      }
    }

    emailjs.send("default_service", "reservation", {
      name: this.state.name, email: this.state.email, phone: this.state.phone,
      order: this.props.room.text, extras: (this.props.extras?this.props.extras.map(extra=>extra.text):[]).join(),
      price: total, date: new Date(), start: this.props.startDate.locale('nb').format("D. MMMM"),
      end: this.props.endDate.locale('nb').format("D. MMMM"),
      requests: this.state.requests
    }).then(function (response) {
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      alert('Din bestilling er sendt.');
    }, function (err) {
      alert('Det skjedde en feil, kunne ikke sende din  bestilling.');
      console.log("FAILED. error=", err);
    });
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  };

  render = () => {
    let rows = [];

    let total = 0;

    if (this.props.room) {
      total += this.props.room.total;
      rows.push(<tr key="room">
        <td>{this.props.room.text}</td>
        <td>{this.props.room.total} kr</td>
      </tr>);
      if (this.props.room.discount>0) {
        total -= this.props.room.discount;
        rows.push(<tr key="roomDiscount">
          <td><FormattedMessage {...messages.childDiscount}/></td>
          <td>-{this.props.room.discount} kr</td>
        </tr>);
      }
      if (this.props.extras) {
        this.props.extras.forEach(function (extra, i) {
          total += extra.total;
          rows.push(<tr key={i}>
            <td>{extra.text}</td>
            <td>{extra.total} kr</td>
          </tr>);
        });
      }
    }

    if (!this.props.room) {
      rows.push(<tr key="empty">
        <td style={{textAlign: 'left'}}><FormattedMessage {...messages.empty}/></td>
      </tr>);
    } else {
      rows.push(<SummaryRow key="total">
        <td>Total</td>
        <td>{total} kr</td>
      </SummaryRow>);
    }

    let dates = (this.props.room?<Dates>{this.props.startDate.locale('nb').format("D. MMMM") + " - " + this.props.endDate.locale('nb').format("D. MMMM")}</Dates>:undefined);
    return <Wrapper>
      <h2><FormattedMessage {...messages.title}/></h2>
      {dates}
      <table>
        <tbody>
        {rows}
        </tbody>
      </table>
      <form onSubmit={this.sendOrder}>
        <Input label={this.context.intl.formatMessage(messages.name)} floatingLabel={true} required={true} type="text"
               value={this.state.name} onChange={this.handleNameChange}/>
        <Input label={this.context.intl.formatMessage(messages.email)} floatingLabel={true} required={true} type="email"
               value={this.state.email} onChange={this.handleEmailChange}/>
        <Input label={this.context.intl.formatMessage(messages.phone)} floatingLabel={true} required={true} type="tel"
               value={this.state.phone} onChange={this.handlePhoneChange}/>
        <Textarea label={this.context.intl.formatMessage(messages.requests)} floatingLabel={true}/>
        <Info>
          <FormattedMessage {...messages.info}/>
        </Info>
        <Center>
          <Button type="submit" size="large" variant="raised"><FormattedMessage {...messages.send} /></Button>
        </Center>
      </form>
    </Wrapper>;
  }
}

Order.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  room: PropTypes.object,
  extras: PropTypes.array
};

Order.contextTypes = {
  intl: React.PropTypes.object
};

export default Order;