//LIBRARIES
import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 150px;

  border: 1px solid rgb(150, 150, 150);
  border-radius: 10px;

  cursor: pointer;

  transform: scale(1);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  p {
    color: black;
  }

  a {
    position: relative;
    width: 100%;
    height: 100%;

    text-decoration: none;
    color: black;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`
