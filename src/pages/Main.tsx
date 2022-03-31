import styled from 'styled-components';
import Card from '../components/main/Card';
import pokes from '../pokes.json';
const Wrap = styled.main`
  width: 100%;
  background-color: #f6f8fc;
`;

const MainContainer = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 120px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Main = () => {
  return (
    <Wrap role="main">
      <MainContainer role="main">
        <Ul>
          {pokes.map((pokeList) => (
            <Card key={pokeList.id} pokeList={pokeList} />
          ))}
        </Ul>
      </MainContainer>
    </Wrap>
  );
};

export default Main;
