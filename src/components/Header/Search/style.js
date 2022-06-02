//LIBRARIES
import styled from 'styled-components'

export const Search = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-family: sans-serif;

    background-color: #2d6073;
    color: #ffffff;

    border: none;
    border-radius: 3px;

    transform: scale(1);
    transition: 0.3s ease-in-out;
    transition: transform 0.1s linear;

    cursor: pointer;

    &:hover {
      background-color: #1f192f;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  input {
    position: relative;
    width: 100%;

    padding: 0.5rem;

    border: 1px solid rgb(93, 93, 93);
    border-radius: 3px;
  }
`
