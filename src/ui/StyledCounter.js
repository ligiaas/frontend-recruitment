import styled from 'styled-components'

const StyledCounter = styled.div`
  align-items: center;
  background-color: #dfbd00;
  border-radius: 50%;
  display: flex;
  height: ${props => props.height}; /*19px; */
  justify-content: center;
  left: ${props => props.left}; /* 20px */
  position: relative;
  top: ${props => props.top}; /* 27px */
  width: ${props => props.width}; /* 19px;*/
  > span {
    color: ${props => props.color}; /* #313135;*/
    font-size: ${props => props.size}; /* 14px; */
    font-weight: bold;
    line-height: 1.16;
    text-align: center;
  }
`

export { StyledCounter }