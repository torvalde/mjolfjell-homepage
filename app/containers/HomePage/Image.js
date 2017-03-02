import styled from 'styled-components';
import bg from './fire_web.jpg';

const Image = styled.div`
  background: url(${bg}) bottom center no-repeat fixed;
  background-size: cover;
  width: 100%;
  height: 500px;
  @media only screen and (max-width : 768px) {
    background-attachment: scroll;
  }
`;

export default Image;