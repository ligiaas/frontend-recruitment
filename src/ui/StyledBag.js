import styled from 'styled-components'

const StyledBag = styled.div`
  align-items: center;
  background-color: #313135;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  opacity: ${({ open }) => (open ? 1 : 0 )};
  padding: 50px 25px;
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  right: 0;
  overflow-x: hidden;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: all 0.3s linear;
  width: ${props => props.width}px;
  max-width: 1200px;
  z-index: 1;
`

export { StyledBag }