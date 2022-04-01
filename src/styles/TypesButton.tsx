import styled from 'styled-components';
export const Types = styled.li<{ types: string }>`
  padding: 6px 10px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  margin-right: 6px;
  background-color: ${(props) =>
    props.types === '노말'
      ? '#ADA594'
      : props.types === '격투'
      ? '#5F2311'
      : props.types === '독'
      ? '#6B246E'
      : props.types === '땅'
      ? '#E0C068'
      : props.types === '비행'
      ? '#5D73D4'
      : props.types === '벌레'
      ? '#88960E'
      : props.types === '바위'
      ? '#9E863D'
      : props.types === '고스트'
      ? '#695582'
      : props.types === '강철'
      ? '#8E8E9F'
      : props.types === '불꽃'
      ? '#C72100'
      : props.types === '물'
      ? '#0267C2'
      : props.types === '전기'
      ? '#FBB917'
      : props.types === '풀'
      ? '#389A02'
      : props.types === '얼음'
      ? '#6DD3F5'
      : props.types === '에스퍼'
      ? '#DC3165'
      : props.types === '드래곤'
      ? '#4E3BA4'
      : props.types === '악'
      ? '#3C2D23'
      : '#E08EE0'};
  color: white;

  &:last-child {
    margin-right: 0;
  }
`;
