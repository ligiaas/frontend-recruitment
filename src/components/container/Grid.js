import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { StyledGrid } from '../StyledGrid'
import { StyledImage } from '../StyledImage'
import { StyledBar } from '../StyledBar'
import { StyledParagraph } from '../StyledParagraph'
import { StyledPrice } from '../StyledPrice'
import Product from './Product'
import Camisa from '../../assets/camisa-listra-pb.jpg'

const Grid = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/data/products.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {setProducts(data.products)})
  }, [])
  
  return (
    <StyledGrid>
      {
        products.map(item => (
          <Product key={item.id}>
            <StyledImage atl={item.title} src={Camisa} />
            <StyledParagraph align='center'>{item.title}</StyledParagraph>
            <StyledBar color='#dfbd00' height='13px' width='25px'></StyledBar>
            <StyledParagraph align='center'>
              R$ <StyledPrice>{item.price}</StyledPrice>
            </StyledParagraph>
          </Product>
        ))
      }
    </StyledGrid>
  )
}

Grid.default = {
  image: 'Imagem não disponível'
}

Grid.propType = {
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Grid
