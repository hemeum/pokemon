import React from 'react';
import styled from 'styled-components';
import { Types } from '../../styles/TypesButton';

const InfoContainer = styled.div`
  display: flex;
`;

const ImgWrap = styled.div``;

const InfoContent = styled.dt`
  white-space: pre-wrap;
`;

export const Info = ({ info }: any) => {
  return (
    <InfoContainer>
      <ImgWrap>
        <img src={info.src} alt={`${info.name} 사진`} />
      </ImgWrap>
      <dl>
        <dd>이름 :</dd>
        <dt>
          <h2>{info.name}</h2>
        </dt>
        <dd>아이디 :</dd>
        <dt>No.{info.id}</dt>
        <dd>세대 :</dd>
        <dt>{info.generation}</dt>
        <dd>설명1 :</dd>
        <InfoContent>{info.firstText}</InfoContent>
        <dd>설명2 :</dd>
        <InfoContent>{info.secondText}</InfoContent>
        <dd>타입 :</dd>
        {info.types.map((type: string, i: number) => {
          return (
            <dt key={i}>
              <Types types={type}>{type}</Types>
            </dt>
          );
        })}
      </dl>
    </InfoContainer>
  );
};
