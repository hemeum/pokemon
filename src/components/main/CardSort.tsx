import styled from 'styled-components';
import { Types } from '../../styles/TypesButton';

const CardSort = () => {
  const generations = ['전체', '1세대', '2세대', '3세대', '4세대'];
  const types = ['물', '불', '땅', '독'];

  const generalLists = generations.map((data: string, index: number) => {
    return <li key={index}>{data}</li>;
  });

  const typeLists = types.map((data: string, index: number) => {
    return <li key={index}>{data}</li>;
  });

  return (
    <SortBox>
      <UList>{generalLists}</UList>
      <UList>{typeLists}</UList>
    </SortBox>
  );
};

export default CardSort;

const SortBox = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  background-color: white;
  border-bottom: ${(props) => props.theme.borderColors.mainColor};
  box-shadow: 0 6px 18px rgba(180, 180, 180, 0.3);
  z-index: ${(props) => props.theme.zIndexs.navZIndex};
`;

const UList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 50px;
  li {
    width: 100px;
    text-align: center;
    border: 1px solid black;
    padding: 5px 0px;
    border-radius: 10px;
  }
`;
