import styled from 'styled-components';
import Card from '../components/main/Card';
import pokes from '../pokes.json';
const MainContainer = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 120px;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Main = () => {
  return (
    <MainContainer role="main">
      <Ul>
        {pokes.map((pokeList) => (
          <Card key={pokeList.id} pokeList={pokeList} />
        ))}
      </Ul>
    </MainContainer>
  );
};

export default Main;
