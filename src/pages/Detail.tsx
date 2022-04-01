import { useLocation } from 'react-router';
import styled from 'styled-components';
import Image from '../components/detail/Image';
import Stats from '../components/detail/Stats';
import { Info } from '../components/detail/Info';

const Detail = () => {
  const {
    state: { info },
  }: any = useLocation();

  return (
    <DetailContainer>
      <Image info={info} />
      <Info info={info} />
      <Stats info={info} />
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.article`
  max-width: 1140px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-bottom: ${(props) => props.theme.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
