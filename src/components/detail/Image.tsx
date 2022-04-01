import styled from 'styled-components';

const Image = ({ info }: any) => {
  console.log(info);
  return (
    <ImageContainer>
      <ImgWrap>
        <Img src={info.mainSrc} alt={`${info.name} 사진`} />
      </ImgWrap>

      <Ddwrap>
        <Dd>설명1</Dd>
        <InfoContent>{info.firstText}</InfoContent>
      </Ddwrap>

      <Ddwrap>
        <Dd>설명2</Dd>
        <InfoContent>{info.secondText}</InfoContent>
      </Ddwrap>
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div`
  width: 36%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.borderColors.mainColor};
  border-radius: 50%;
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 40px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Ddwrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dd = styled.dd`
  margin-right: 6px;
`;

const InfoContent = styled.dt`
  white-space: pre-wrap;
`;
