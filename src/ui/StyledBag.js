import styled from 'styled-components'

const StyledBag = styled.div`
  align-items: center;
  background-color: rgb(32, 32, 37);
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 50px 25px;
  position: absolute;
  right: 0;
  overflow: scroll;
  top: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(+100%)'};
  transition: transform 0.3s ease-in-out;
  width: ${props => props.width}px;
  max-width: calc(1300 - 20%);
  z-index: 1;
`

export { StyledBag }