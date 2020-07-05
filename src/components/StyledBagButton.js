import styled from 'styled-components'

export const StyledBagButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  left: 2rem;
  padding: 0;
  position: absolute;
  top: 5%;
  width: 2rem;
  z-index: 10;
  
  &:focus {
    outline: none;
  }

  &:hover {
    background: #dfbd00;
  }
  
  div {
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transition: all 0.3s linear;
    transform-origin: 1px;
    width: 2rem;
  }
`;