import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
  margin-top: 32px;
  padding: 0;
  list-style: none;
`;

export const MovieLink = styled(Link)`
  display: flex;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #ffffffbc;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  &:before {
    content: '';
    display: block;
    padding-top: 150%;
  }

  &:hover {
    transform: scale(1.4);
    z-index: 2;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
