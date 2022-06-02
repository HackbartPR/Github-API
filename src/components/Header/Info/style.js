//LIBRARIES
import styled from 'styled-components'

export const Info = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin-top: 1rem;

  a {
    text-decoration: none;
    color: black;
  }

  img {
    position: relative;
    width: auto;
    height: 100%;

    clip-path: circle();
  }

  span {
    display: inline-block;
  }

  h2 {
    margin: 0;
  }

  .info {
    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .info-datas {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .info-datas__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
