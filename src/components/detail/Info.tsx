import styled from 'styled-components';
import { Types } from '../../styles/TypesButton';

export const Info = ({ info }: any) => {
  return (
    <InfoContainer>
      <InfoWrap>
        <h2>{info.name}</h2>

        <Ddwrap>
          <Dd>ID</Dd>
          <Dt>No.{info.id}</Dt>
        </Ddwrap>
        <Ddwrap>
          <Dd>세대</Dd>
          <Dt>{info.generation}세대</Dt>
        </Ddwrap>

        <Ddwrap>
          <Dd>타입</Dd>
          <DtWrap>
            {info.types.map((type: string, i: number) => {
              return (
                <Dt key={i}>
                  <Types types={type}>{type}</Types>
                </Dt>
              );
            })}
          </DtWrap>
        </Ddwrap>
      </InfoWrap>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrap = styled.dl`
  letter-spacing: 6px;
`;

const Ddwrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 24px 0;
`;

const Dd = styled.dd`
  font-weight: bold;
`;

const DtWrap = styled.div`
  display: flex;
`;

const Dt = styled.dt``;
