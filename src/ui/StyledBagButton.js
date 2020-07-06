import styled from 'styled-components'

export const StyledBagButton = styled.button`
  background: #313135;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  right: 2rem;
  padding: 0;
  position: absolute;
  top: 5%;
  transition: all 0.3s linear;
  width: 2rem;
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #dfbd00;
  }

  div {
    background: #313135;
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transition: all 0.3s linear;
    transform-origin: 1px;
    width: 2rem;
  }
`;