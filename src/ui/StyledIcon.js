import styled from 'styled-components'
import IconBag from '../assets/bag.svg'

const StyledIcon = styled.div`
  background-color: ${props => props.bgcolor};
  background-image: url(${IconBag});
  background-repeat: no-repeat;
  color: red;
  height: ${props => props.height + 'px' || '40px'};
  margin: ${props => props.height + 'px' || '0 25px'};
  width: ${props => props.height + 'px' || '33px'};
`

export { StyledIcon }