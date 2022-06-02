//LIBRARIES
import styled from 'styled-components'

export const Main = styled.div`
  position: relative;
  width: 100%;

  margin-top: 2rem;

  .filter-buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    height: 50px;

    button {
      position: relative;
      width: 120px;
      height: 100%;

      border: 1px solid rgb(150, 150, 150);
      border-radius: 10px;

      background-color: transparent;

      cursor: pointer;

      transform: scale(1);
      transition: 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }

      &.selected {
        transform: scale(1.05);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .wrapper-proj {
    position: relative;
    width: 100%;

    margin-top: 2rem;

    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`
