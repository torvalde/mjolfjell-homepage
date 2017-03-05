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
import Sheets from 'components/Sheets';
import Supper from 'components/Supper';
import Transport from 'components/Transport';

import twitter from './twitter.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';

import Order from 'components/Order';
import FrontPage from './FrontPage';
import moment from 'moment';
import Image from './Image';


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
  width: calc(100% - 400px);
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
    width: 380px;
    height: 380px;
    padding: 20px 30px;
    text-align: left;
    margin-top: -90px;
    box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
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
    font-size: 14px;
    font-weight: 300;
    h3 {
      font-size: 14px;
      margin-bottom: 0;
    }
    h3:first-child {
      margin-top:0;
    }
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
    margin: 0 0 160px 0;
    text-align: center;
    background: orange;
    padding: 40px;
    h2 {
      margin:0;
      margin-bottom: 30px;
      padding:0;
      color: white;
      font-size: 5rem;
      line-height: 150%;
    }
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
    margin: 20px 0 120px 0;
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

const ActivitySection = styled.section`
    overflow: hidden;
    max-width: 650px;
    width: 100%;
    margin: 20px auto 120px auto;
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
    ul {
      list-style-type: none;
      li {
        padding: 0;
      }
    }
    @media only screen and (max-width : 768px) {
      padding: 0;
      margin:0;
    }
`;

const FullSection = styled.section`
    margin: 20px 0 0 0;
`;

const TeaserSection = styled.section`
    font-size:18px;
    font-style: italic;
    max-width: 760px;
    width: 100%;
    margin: 20px auto 120px auto;
    padding: 20px 0;
    h3 {
      font-size: inherit;
      font-style: normal;
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
      padding: 20px 20px 80px 20px;
      background: lightblue;
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

const Copyright = styled(Link)`
    margin-top: 20px;
    display: block;
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
    this.state = {startDate, endDate, adult: 2, child: 0, nights: endDate.diff(startDate, 'days')};
  }
  handleSelect = (date) => {
    this.setState({startDate:date.startDate,endDate:date.endDate,nights:date.endDate.diff(date.startDate, 'days')});
    this.updateSheets();
  };
  scrollToOrder = () => {
    document.getElementById('order').scrollIntoView();
  };
  setRoom = (room) => {
    console.log(room);
    this.setState({orderRoom: room});
    setTimeout(() =>{
      this.updateSheets();
    },0);
  };
  setExtras = (extras) => {
    console.log(extras);
    this.setState({orderExtras: extras});
  };
  updateSheets = () => {
    if (this.state.orderRoom && this.state.orderRoom.type == 'FamilyRoom') {
      this.setExtras([{text: this.context.intl.formatMessage(messages.breakfast), total:(150 * (this.state.adult+this.state.child) * this.state.nights)}]);
    } else {
      this.setExtras([{text: this.context.intl.formatMessage(messages.sheets), total:(100 * (this.state.adult+this.state.child) * (Math.floor(this.state.nights/3)+1))}]);
    }
  };
  setAdultCount = (count) => {
    console.log('adult count '+count);
    this.setState({adult:count});
    this.updateSheets();
  };
  setChildCount = (count) => {
    console.log('child count '+count);
    this.setState({child:count});
    this.updateSheets();
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
          <p>Øvst i mystiske Raundalen, blant tusser & troll, ligg Hardangerviddas nordre portal; Mjølfjell
            Ungdomsherberge. I dette paradoksale paradis finnes ingen begrensinger på dine muligheter.</p>
          <div><Link href="tel:+4746184070">+47 461 84 070</Link><br/><Link href="mailtop:post@mjolfjell.no">post@mjolfjell.no</Link></div>
          <div>Vipps til tusser og troll: 88932</div>
          <CenteredDiv><Button size="large" color="primary" variant="raised" onClick={this.scrollToOrder}>Bestill rom!</Button></CenteredDiv>
        </About>
          <Title>
            <svg title="Mjølfjell Ungdomsherberge">
            <use xlinkHref={mjolfjell}/>
            </svg>
          </Title>
        </TopSection>
        <TeaserSection>
          <Paragraph>
            Mjølfjell Ungdomsherberge har mer enn 100 meget behagelige senger med direkte adgang til den helt unike Hardangervidda
            Nasjonalpark. Fornuftige priser, enernæringsrik og velsmakende lokal mat, fersk kaffe fra stedets eget brenneri
            og en ekte italiensk stenovn hvor du kan steke din egen pizza, skaper rammen for ditt opphold her.
          </Paragraph>
          <Paragraph>
          Ungdomsherberget har ett hotell med rom-reservering og ett Vandrerhjem med sengebestilling.
          </Paragraph>
          <h3>
          Hotellet
          </h3>
          <Paragraph>
            Kjøkkenets ferske grovbrød serveres hver morgen sammen med vår hjemmebrente kaffe, utvalgte Hardanger frukt, kjøtt frå Voss, ferskpressede juicer og müsli & yoghurt.
          </Paragraph>
          <h3>
          Vandrerhjemmet
        </h3>
          <Paragraph>
          Stedets vandrerhjem gir alle en mulighet til å overnatte i slike spektakulære omgivelser. Ved tilgjengelighet
            i spisesalen kan også Vandrerhjemmets gjester nyte godt av kjøkkenets delikatesser.
          Vandrerhjemmet har egen forpleining med tilgang til sauna og et moderne kjøkken med panorama utsikt over Raundalen.
            Vandrerhjemmets gjester også anledning til å reserverer både frokost og middag ved tilgjengelighet på hotellet.
          </Paragraph>
          <Paragraph>
            <a href="#order">Gå til rom og sengepriser</a>.
      </Paragraph>
        </TeaserSection>
          <Section>
            <Location href="https://www.google.com/maps/dir//Mjølfjell+Vandrerhjem,+voss/" target="_blank">
              <img width="300" height="300" src="https://maps.googleapis.com/maps/api/staticmap?center=60.6868453,6.9307285&amp;zoom=8&amp;scale=2&amp;size=300x300&amp;maptype=roadmap&amp;key=AIzaSyCkMf4_0AcLhCN4Sr4qeP2pvCutK0JN3Hk&amp;format=png&amp;visual_refresh=true&amp;markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.6868453,6.9307285" alt="Google Map of Mjølfjell Vandrerhjem, voss"/>
            </Location>
            <LocationInfo>
              <h3>Ta toget!</h3>
              <p>
                Tog direkte fra Bergen til Ørneberget Stasjon (200 meter fra Herberget, eller Mjølfjell Stasjon. Transport fra Mjølfjell Stasjon (20 min på ski, 15 min på sykkel) kan arrangeres til en fastpris på 100  + 50 per person. Må bestilles. Er det flere enkeltbestillinger, deles rabatten på alle.
              </p>
              <h3>Kom på ski</h3>
                <p>
                Fra Mjølfjell stasjon er det ikke mer enn 20 -30 minutter på ski. Fra Myrdal stasjon er det et par timer med rolig glid.
                </p>
              <h3>Med Sykkel</h3>
              <p>
                Rallarvegen er en ypperlig transport-åre for sykkel og vandring. Man kan sykle fra Voss, Haugastøl, Ulvik, Myrkdalen eller mang en annen umerket sti.
              </p>
              <h3>Med Bil</h3>
              <p>
                Fra Bømoen på Voss følger du fylkesveg 307 mot Mjølfjell Ungdomsherberge. Veien er merket helt opp. 35 kilometer fra Voss sentrum.
              </p>
            </LocationInfo>
          </Section>
          <FullSection>
            <Image/>
          </FullSection>
          <OrderSection id="order">
            <h2>Din bestilling:</h2>
            <DateRangeContainer>
            <DateRange
              onInit={this.handleSelect}
              onChange={this.handleSelect}
              linkedCalendars={true}
              minDate={moment()}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              theme={{
                DaySelected: {
                  background   : '#083D77',
                  color: '#ffffff'
                },
                DayInRange: {
                  background   : '#083D77',
                  color: '#ffffff'
                }
              }}
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
              <PersonSelector selected={this.state.adult} setCount={this.setAdultCount}/>
              <PersonSelector child={true} selected={this.state.child} setCount={this.setChildCount}/>
              <VisitorInfo>
                <FormattedMessage {...messages.visitorInfo}/>
              </VisitorInfo>
            </VisitorsContainer>
          </OrderSection>
          <ProductSection>
            <RoomSelector onChange={this.setRoom}>
                <DormBed nightCount={this.state.nights} adultGuestCount={this.state.adult} childGuestCount={this.state.child}/>
                <FamilyRoom nightCount={this.state.nights} adultGuestCount={this.state.adult} childGuestCount={this.state.child}/>
            </RoomSelector>
          </ProductSection>
          <Order room={this.state.orderRoom} extras={this.state.orderExtras} startDate={this.state.startDate} endDate={this.state.endDate}>

          </Order>
        <ActivitySection>
          <Paragraph>
            Aktivitetsmulighetene er mangfoldige; med din fantasi og vår tilrettelegging er alt mulig. Her er Høyt Under Taket!, så bare spør de sprø!
          </Paragraph>
          <Paragraph>
            I samarbeid med lokale tilbyder i regionen, og spesielt Voss, kan vi arrangere alt fra kurs i elvepadling og havkajakk til overlevelseskurs på Hardangervidda som avsluttes med et gourmetmåltid laget på feltkjøkken i noe Norges villeste natur.
          </Paragraph>
            <Paragraph>
            Guidede randonee turer til legendariske topper som 1212, Mjølfjell, xxx. Med litt drahjelp opp de første 100 kotene, blir avmarsjen behagelig. Raundalselven er verdenskjent for sine fantastiske fall, sterke strømmer og langstrakte opplevelse; den er å regne blant verdens fremste padleelver, og området huser i dag noen av verdens beste ekstremsportutøvere på feltet.
            </Paragraph>
          <Paragraph>
              I peisestuen har vi biljard, en masse gode bøker og et stort utvalg brettspill.
          </Paragraph>
          <Paragraph>
            I baren Tusser & Troll serves lokalt brygg, friske drinker og italienske pizzabunner med et utvalg vestlandske ingredienser. I kiosken selges også flere norske og danske godsaker basert på ekte råvarer fra mindre produsenter. Det skal være godt å være sunn.
          </Paragraph>
        </ActivitySection>
        <Footer>
          <Social>

            <li><a href="https://www.facebook.com/MjolfjellUngdomsherberge" target="_blank"><img src={facebook}/></a></li>
          </Social>
          <Contact>
            <li>Mjølfjell vandrarheim</li>
            <li>5700 Voss</li>
            <li>Telefon: <a href="tel:+4746184070">461 84 070</a></li>
            <li>Epost: <a href="mailtop:post@mjolfjell.no">post@mjolfjell.no</a></li>
          </Contact>
          <div style={{clear:'both'}}/>
          <Copyright href="http://www.hoydalsvik.net/" target="_blank">Copyright for enkelte av bildene på siden tilhører Odd Høydalsvik</Copyright>
        </Footer>
      </main>
    );
  }
}

HomePage.contextTypes = {
  intl: React.PropTypes.object
};