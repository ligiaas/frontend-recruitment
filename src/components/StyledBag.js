import styled from 'styled-components'

const StyledBag = styled.div`
  align-items: center;
  /* align-content: space-around; */
  background-color: rgb(32, 32, 37);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 50px 25px;
  position: absolute;
  right: 0;
  top: 0px;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(+100%)'};
  transition: transform 0.3s ease-in-out;
  width: ${props => props.width};
  z-index: 1;
`

export { StyledBag }