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

import mjolfjell from './MJØLFJELL.inline.svg';
import Button from 'muicss/lib/react/button';
import { DateRange } from 'react-date-range';
import PersonSelector from 'components/PersonSelector';
import RoomSelector from 'components/RoomSelector';
import ExtrasSelector from 'components/ExtrasSelector';
import DormBed from 'components/DormBed';
import FamilyRoom from 'components/FamilyRoom';
import Towels from 'components/Towels';
import Supper from 'components/Supper';
import Transport from 'components/Transport';

import twitter from './twitter.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';

import Order from 'components/Order';
import FrontPage from './FrontPage';
import moment from 'moment';

const TopSection = styled.div`
  padding: 0 20px;
  margin: 20px 0 140px 0;
    @media only screen and (max-width : 768px) {
      margin: 0;
      padding: 0;
    }
`;

const Title = styled.div`
  margin: 0 380px 0 0;
  width: calc(100% - 380px);
  height: 300px;
  svg {
      width: 100%;
    height: 100%;
    fill: currentColor;
  }
  @media only screen and (max-width : 768px) {
      position: absolute;
      margin:0;
      top:0;
      left:0;
      width: 90%;
        margin: 0 5%;
      height: 140px;
      margin-top: 10px;
      color: #dcdcdc;
  }
`;

const About = styled.div`
    background: #99AEBE;
    float: right;
    width: 350px;
    height: 350px;
    padding: 20px 30px;
    text-align: left;
    margin-top: -90px;
    box-shadow: 10px 10px 5px 0px rgba(22,22,22,0.5);
    @media only screen and (max-width : 768px) {
      margin-top: 0;
      float: none;        
      width: 100%;
      height: auto;
    }
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
    @media only screen and (max-width : 768px) {
      float: none;
          width: 100%;
    display: block;
      img {
        width: 100%;
        height: auto;
      }
    }
`;

const LocationInfo = styled.div`
    max-width: 700px;
    margin-left: 360px;
    font-size: 18px;
    font-weight: 300;
        @media only screen and (max-width : 768px) {
              padding: 20px;
    max-width: none;
    margin-left: 0;
    width: 100%;
    }
`;

const Paragraph = styled.p`
    margin: 0 0 40px;
`;

const OrderSection = styled.section`
    overflow: auto;
    padding: 0 20px;
    margin: 20px 0 160px 0;
    text-align: center;
    background: orange;
    padding: 40px;
    padding-top: 60px;
`;

const DateRangeContainer = styled.div`
    width: 560px;
    display: inline-block;
    @media only screen and (max-width : 768px) {
      display: none;
    }
`;

const DateRangeContainerMobile = styled.div`
    display: none;
    @media only screen and (max-width : 768px) {
      display: block;
      width: 280px;
      margin: 0 auto;
    }
`;

const VisitorsContainer = styled.div`
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
    margin: 20px 0 160px 0;
    h2 {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
    @media only screen and (max-width : 768px) {
      padding: 0;
      margin:0;
    }
`;

const ProductSection = styled(Section)`
      margin-bottom: 60px;
    
    @media only screen and (max-width : 768px) {
      padding: 0 20px;
      margin:0;
    }
`;

const Footer = styled.footer`
      padding: 0 20px;
    margin: 20px 0 80px 0;
`;

const Social = styled.ul`
  list-style: none;
  margin: 0;
  display: block;
  float: right;
  padding: 0;
  li {
    padding: 0;
    display: inline-block;
    margin-left: 10px;
  }
`;

const Contact = styled.ul`
list-style: none;
    margin: 0;
    display: inline-block;
    padding: 0;
`;

export default class HomePage extends React.Component {


  // React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
  scrollToOrder = () => {
    document.getElementById('order').scrollIntoView();
  };
  setRoom = (room) => {
    console.log(room);
    this.setState({orderRoom: room});
  };
  setExtras = (extras) => {
    console.log(extras);
    this.setState({orderExtras: extras});
  };
  /*
   <li><a href=""><img src={twitter}/></a></li>
   <li><a href=""><img src={instagram}/></a></li>
   */
  render = () => {
    return (
      <main>
        <FrontPage/>
        <TopSection>
        <About>
          <p>Ved Bergensbanen øvst i Raundalen der Rallarvegen mot Voss får fast dekke, finn ein Mjølfjell ungdomsherberge - innfalsporten til Hardangervidda.</p>
          <div>Telefon: <Link href="tel:+4790557360">+4790557360</Link></div>
          <div>Epost: <Link href="mailtop:post@mjolfjell.no">post@mjolfjell.no</Link></div>
          <CenteredDiv><Button size="large" color="primary" variant="raised" onClick={this.scrollToOrder}>Bestill rom!</Button></CenteredDiv>
        </About>
          <Title>
            <svg>
            <use xlinkHref={mjolfjell}/>
            </svg>
          </Title>
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
                Du kan reisa til Mjølfjell med bil via Voss, eller med tog. Trykk på kartet for en reisebeskrivelse.
              </Paragraph>
            </LocationInfo>
          </Section>
          <OrderSection id="order">
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
            <DateRangeContainerMobile>
              <DateRange
                onInit={this.handleSelect}
                onChange={this.handleSelect}
                minDate={moment()}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                calendars={1}
              />
            </DateRangeContainerMobile>

            <VisitorsContainer>
              <PersonSelector selected={this.state.adult}/>
              <PersonSelector child={true} selected={this.state.child}/>
              <VisitorInfo>
                <FormattedMessage {...messages.visitorInfo}/>
              </VisitorInfo>
            </VisitorsContainer>
          </OrderSection>
          <ProductSection>
            <h2>
              <FormattedMessage {...messages.accomodation} />:
            </h2>
            <RoomSelector onChange={this.setRoom}>
                <DormBed nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
                <FamilyRoom nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
            </RoomSelector>
          </ProductSection>
          <ProductSection>
            <h2>
              <FormattedMessage { ...messages.extras } />:
            </h2>
            <ExtrasSelector onChange={this.setExtras}>
              <Towels nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
              <Supper nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
              <Transport nightCount={this.state.nights} guestCount={(this.state.adult+this.state.children)}/>
            </ExtrasSelector>
          </ProductSection>
          <Order room={this.state.orderRoom} extras={this.state.orderExtras}>

          </Order>
        <Footer>
          <Social>

            <li><a href="https://www.facebook.com/MjolfjellHostel" target="_blank"><img src={facebook}/></a></li>
          </Social>
          <Contact>
            <li>Mjølfjell vandrarheim</li>
            <li>5700 Voss</li>
            <li>Telefon: <a href="tel:+4790557360">+4790557360</a></li>
            <li>Epost: <a href="mailtop:post@mjolfjell.no">post@mjolfjell.no</a></li>
          </Contact>
        </Footer>
      </main>
    );
  }
}
