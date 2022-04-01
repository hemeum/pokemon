import styled from 'styled-components';

const Stats = ({ info: { stats } }: any) => {
  console.log(stats);
  return (
    <StatsContainer>
      <StatsWrap>
        <dd>공격 </dd>
        <dt>{stats.attack}</dt>
        <dd>방어 </dd>
        <dt>{stats.defense}</dt>
        <dd>체력 </dd>
        <dt>{stats.hp}</dt>
        <dd>스페셜공격 </dd>
        <dt>{stats.specialAttack}</dt>
        <dd>스페셜방어 </dd>
        <dt>{stats.specialDefense}</dt>
        <dd>스피드 </dd>
        <dt>{stats.speed}</dt>
      </StatsWrap>
    </StatsContainer>
  );
};

export default Stats;

const StatsContainer = styled.div`
  perspective: 400px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 6px;
`;

const StatsWrap = styled.dl`
  transition: transform 0.3s;
  transform: rotateY(-30deg);
  cursor: pointer;

  &:hover {
    transform: rotateY(0);
  }
`;
