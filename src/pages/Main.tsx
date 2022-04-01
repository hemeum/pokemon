import styled from 'styled-components';
import Card from '../components/main/Card';
import pokes from '../pokes.json';

const MainContainer = styled.article`
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: ${(props) => props.theme.navHeight};
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Main = () => {
  return (
    <MainContainer>
      <Ul>
        {pokes.map((pokeList) => (
          <Card key={pokeList.id} pokeList={pokeList} />
        ))}
      </Ul>
    </MainContainer>
  );
};

export default Main;
