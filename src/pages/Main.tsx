import styled from 'styled-components';
import pokes from '../pokes.json';

import Card from '../components/main/Card';
import CardSort from '../components/main/CardSort';

const MainContainer = styled.article`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 80px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
`;

const Main = () => {
  return (
    <MainContainer>
      <CardSort></CardSort>
      <Ul>
        {pokes.map((pokeList) => (
          <Card key={pokeList.id} pokeList={pokeList} />
        ))}
      </Ul>
    </MainContainer>
  );
};

export default Main;
