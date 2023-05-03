import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

export const List = styled.ul`
  list-style-position: inside;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #1e90ff;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #3b77d8;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  margin-bottom: 16px;
`;
