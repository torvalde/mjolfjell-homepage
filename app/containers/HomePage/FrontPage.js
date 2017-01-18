import styled from 'styled-components';
import bg from './mjolfjell.jpg';

const FrontPage = styled.div`
  background: url(${bg}) top center no-repeat;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 180px);
  @media only screen and (max-width : 768px) {
    height: 160px;
  }
`;

export default FrontPage;