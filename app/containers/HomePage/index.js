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

import mjolfjell from './MJØLFJELL.svg';
import Button from 'muicss/lib/react/button';
import { DateRange } from 'react-date-range';
import PersonSelector from 'components/PersonSelector';
import RoomSelector from 'components/RoomSelector';
import ExtrasSelector from 'components/ExtrasSelector';
import DormBed from 'components/DormBed';
import FamilyRoom from 'components/FamilyRoom';
import Towels from 'components/Towels';


import Order from 'components/Order';
import FrontPage from './FrontPage';
import moment from 'moment';
import Product from 'components/Product';

const TopSection = styled.div`
  padding: 0 20px;
  margin: 20px 0 80px 0;
`;

const Title = styled.div`
  background: url(${mjolfjell}) top center no-repeat;
  background-size: contain;
      margin: 0 380px 0 0;
    width: calc(100% - 380px);
    height: 300px;
`;

const About = styled.div`
    background: #99AEBE;
    float: right;
    width: 350px;
    height: 350px;
    padding: 20px 30px;
    text-align: left;
    margin-top: -90px;
`;

const Link = styled.a`
  color: #2e2e2e;
  text-decoration: none;
`;

const CenteredDiv = styled.div`
  text-align: center;
  margin-top: 30px;
`;



const Location = styled.a`
    float: left;
`;

const LocationInfo = styled.div`
    max-width: 700px;
    margin-left: 360px;
    font-size: 18px;
    font-weight: 300;
`;

const Paragraph = styled.p`
    margin: 0 0 40px;
`;

const OrderSection = styled.section`
    overflow: auto;
    padding: 0 20px;
    margin: 20px 0 80px 0;
    text-align: center;
    background: orange;
    padding: 40px;
`;

const DateRangeContainer = styled.div`
    width: 560px;
    display: inline-block;
`;

const VisitorsContainer = styled.div`
    margin-top: 40px;
    font-size: 38px;
`;

const VisitorInfo = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 20px;
    color: white;
`;

const Section = styled.section`
    overflow: hidden;
    padding: 0 20px;
    margin: 20px 0 80px 0;
    h2 {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
`;

export default class HomePage extends React.Component { // React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    let startDate, endDate;
    if (moment().isoWeekday() <= 5) {
      // then just give me this week's instance of that day
      startDate = moment().startOf('day').add(1, 'weeks').isoWeekday(5);
      endDate = moment().startOf('day').add(2, 'weeks').isoWeekday(0);
    } else {
      // otherwise, give me next week's instance of that day
      startDate = moment().startOf('day').add(2, 'weeks').isoWeekday(5);
      endDate = moment().startOf('day').add(3, 'weeks').isoWeekday(0);
    }
    this.state = {startDate, endDate, adult: 2, children: 0, nights: endDate.diff(startDate, 'days')};
  }
  handleSelect = (date) => {
    this.setState({startDate:date.startDate,endDate:date.endDate,nights:date.endDate.diff(date.startDate, 'days')});
  };
  setRoom = (room) => {
    console.log(room);
    this.setState({orderRoom: room});
  };
  setExtras = (extras) => {
    console.log(extras);
    this.setState({orderExtras: extras});
  };
  render = () => {
    return (
      <main>
        <FrontPage/>
        <TopSection>
        <About>
          <p>Ved Bergensbanen øvst i Raundalen der Rallarvegen mot Voss får fast dekke, finn ein Mjølfjell ungdomsherberge - innfalsporten til Hardangervidda.</p>
          <div>Telefon: <Link href="tel:+4790557360">+4790557360</Link></div>
          <div>Epost: <Link href="mailtop:post@mjolfjell.no">post@mjolfjell.no</Link></div>
          <CenteredDiv><Button size="large" color="primary" variant="raised">Bestill rom!</Button></CenteredDiv>
        </About>
        <Title/>
        </TopSection>
          <Section>
            <Location href="https://www.google.com/maps/dir//Mjølfjell+Vandrerhjem,+voss/" target="_blank">
              <img width="300" height="300" src="https://maps.googleapis.com/maps/api/staticmap?center=60.6868453,6.9307285&amp;zoom=8&amp;scale=2&amp;size=300x300&amp;maptype=roadmap&amp;key=AIzaSyCkMf4_0AcLhCN4Sr4qeP2pvCutK0JN3Hk&amp;format=png&amp;visual_refresh=true&amp;markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.6868453,6.9307285" alt="Google Map of Mjølfjell Vandrerhjem, voss"/>
            </Location>
            <LocationInfo>
              <Paragraph>
                Mjølfjell er eit flott utgangspunkt for dagsturar i den vestlege fjellheimen. Om du ynskjer å dra oppover kan du ta toget frå vår "eigen" stasjon Ørneberget. På 10 minutter er du på Myrdal. Det er startstaden på ein av dei mest populære turist-attraksjonane i Norge. Du kan gå til fots, sykle, eller ta tog ned den fantastiske Flåmsdalen.
              </Paragraph>
              <Paragraph>
                Du kan reisa til Mjølfjell med bil via Voss, eller med tog. Trykk på kartet på venstre side for en reisebeskrivelse.
              </Paragraph>
            </LocationInfo>
          </Section>
          <OrderSection>
            <DateRangeContainer>
            <DateRange
              onInit={this.handleSelect}
              onChange={this.handleSelect}
              linkedCalendars={true}
              minDate={moment()}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
            </DateRangeContainer>
            <VisitorsContainer>
              <PersonSelector selected={this.state.adult}/>
              <PersonSelector child={true} selected={this.state.child}/>
              <VisitorInfo>
                <FormattedMessage {...messages.visitorInfo}/>
              </VisitorInfo>
            </VisitorsContainer>
          </OrderSection>
          <Section>
            <h2>
              <FormattedMessage {...messages.accomodation} />:
            </h2>
            <RoomSelector onChange={this.setRoom}>
                <DormBed nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
                <FamilyRoom nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
            </RoomSelector>
          </Section>
          <Section>
            <h2>
              <FormattedMessage { ...messages.extras } />:
            </h2>
            <ExtrasSelector onChange={this.setExtras}>
              <Towels nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
            </ExtrasSelector>
          </Section>
          <Order room={this.state.orderRoom} extras={this.state.orderExtras}>

          </Order>
      </main>
    );
  }
}
