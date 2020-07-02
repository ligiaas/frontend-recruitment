import styled from 'styled-components'

const StyledBag = styled.div`
  background-color: rgb(32, 32, 37);
  display: none;
  height: 100%;
  padding: 50px 25px;
  position: absolute;
  right: 0;
  top: 0px;
  width: ${props => props.width};
`

export { StyledBag }