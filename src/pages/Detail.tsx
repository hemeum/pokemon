import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';
import { Info } from '../components/detail/Info';

const DetailContainer = styled.article`
  padding-top: ${(props) => props.theme.navHeight};
`;

const Detail = () => {
  const { id } = useParams();
  const {
    state: { info },
  }: any = useLocation();

  console.log(info);

  return (
    <DetailContainer>
      <Info info={info} />
    </DetailContainer>
  );
};

export default Detail;
