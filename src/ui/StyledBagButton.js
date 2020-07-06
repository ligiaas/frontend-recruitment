import styled from 'styled-components'

const StyledBagButton = styled.button`
  align-items: center;
  background: #313135;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: center;
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

`

export { StyledBagButton }