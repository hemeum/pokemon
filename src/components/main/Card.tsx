import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Types } from '../../styles/TypesButton';

const PokeInfoWrap = styled.li`
  width: 26%;
  height: 200px;
  border-radius: 28px;
  box-shadow: 0px 8px 16px 6px rgba(180, 180, 180, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 1%;
  border: ${(props) => props.theme.borderColors.mainColor};
  cursor: pointer;
`;
const PokeNumber = styled.div`
  margin: 21px 0 8px;
`;

const PokeName = styled.h3`
  font-size: 24px;
  margin-bottom: 18px;
  font-weight: normal;
`;

const PokeImage = styled.img`
  margin-top: -50px;
`;

const Card = ({ pokeList }: any) => {
  const navigate = useNavigate();

  return (
    <PokeInfoWrap
      onClick={() => {
        navigate(`/detail/${pokeList.id}`, { state: { info: pokeList } });
      }}
    >
      <PokeImage src={pokeList.src} alt={pokeList.name}></PokeImage>
      <PokeNumber aria-label={`포켓몬 아이디는 ${pokeList.id}`}>
        No.{pokeList.id}
      </PokeNumber>
      <PokeName>{pokeList.name}</PokeName>
      <ul>
        {pokeList.types.map((type: string, i: number) => {
          return (
            <Types key={i} types={type}>
              {type}
            </Types>
          );
        })}
      </ul>
    </PokeInfoWrap>
  );
};

export default Card;
