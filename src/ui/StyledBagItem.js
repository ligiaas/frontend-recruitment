import styled from 'styled-components'

const StyledBagItem = styled.div`
  background: transparent;
  align-items: center;
  border-top: 2px solid rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-columns: 80px auto 95px;
  justify-content: normal;
  height: 104px;
  transition: all 0.3s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.4)
  }
  width: 100%;
`

const StyledItemButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
const StyledItemImage = styled.img`
  height: 70px;
  margin: auto 0;
  width: auto;
`

const StyledBagProduct = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledBagValue = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`

export { StyledBagItem, StyledItemButton, StyledItemImage, StyledBagProduct, StyledBagValue }