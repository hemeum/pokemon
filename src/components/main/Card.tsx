import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Types } from '../../styles/TypesButton';

const PokeInfoWrap = styled.li`
  width: 21%;
  height: 160px;
  border-radius: 16px;
  box-shadow: 0px 8px 16px 6px rgba(180, 180, 180, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  border: ${(props) => props.theme.borderColors.mainColor};
  cursor: pointer;
`;
const PokeNumber = styled.div`
  margin-bottom: 12px;
`;

const PokeName = styled.strong`
  font-size: 18px;
  margin-bottom: 12px;
`;

const PokeImage = styled.img`
  margin-top: -50px;
`;

const Card = ({ pokeList }: any) => {
  const navigate = useNavigate();

  return (
    <PokeInfoWrap
      onClick={() => {
        navigate(`/${pokeList.id}`);
      }}
    >
      <PokeImage src={pokeList.src} alt={pokeList.name}></PokeImage>
      <PokeNumber aria-label={`포켓몬 아이디는 ${pokeList.id}`}>
        No.{pokeList.id}
      </PokeNumber>
      <PokeName>{pokeList.name}</PokeName>
      <ul>
        {pokeList.types.map((v: string, i: number) => {
          return (
            <Types key={i} types={v}>
              {v}
            </Types>
          );
        })}
      </ul>
    </PokeInfoWrap>
  );
};

export default Card;
