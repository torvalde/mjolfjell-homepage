import styled from 'styled-components';
import bg from './elv.jpg';

const Image = styled.div`
  background: url(${bg}) top center no-repeat fixed;
  background-size: cover;
  width: 100%;
  height: 500px;
  @media only screen and (max-width : 768px) {
    background-attachment: scroll;
  }
`;

export default Image;