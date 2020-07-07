import styled from 'styled-components'

const StyledBagSubTotal = styled.div`
  align-items: center;
  border-top: 2px solid rgba(0, 0, 0, 0.4);
  display: flex;
  height: 104px;
  justify-content: space-between;
  width: 100%;
`

const StyledSubTotalValue = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`
export { StyledBagSubTotal, StyledSubTotalValue }