import styled from 'styled-components'
import { StyledIcon } from './StyledIcon'

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
`

const StyledHeaderIcon = styled(StyledIcon)`
  height: 40px;
  margin: 0 25px;
  width: 33px;
`

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
`

const StyledCounter = styled.div`
  align-items: center;
  background-color: #dfbd00;
  border-radius: 50%;
  display: flex;
  height: 19px;
  justify-content: center;
  left: -38px;
  position: relative;
  top: 15px;
  width: 19px;
  > span {
    color: #313135;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.16;
    text-align: center;
  }
`

export { StyledHeader, StyledHeaderIcon, StyledTitle, StyledCounter }