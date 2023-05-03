import styled from '@emotion/styled';

export const CastList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CastItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CastImage = styled.img`
  width: 50px;
  height: 75px;
  margin-right: 10px;
`;

export const CastName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const CastCharacter = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const CastNoImage = styled.div`
  width: 50px;
  height: 75px;
  margin-right: 10px;
  background-color: #e0e0e0;
`;
