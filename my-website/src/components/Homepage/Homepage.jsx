import React from 'react'
import { HomepageContainer,
          ImageContainer,
          ImageOne,
          ImageTwo, 
          ImageThree, 
          ImageFour, 
          SquareContainer
} from './HomepageElements';

const Homepage = () => {
  return (
    <HomepageContainer>
        <ImageContainer>
            <ImageOne></ImageOne>
            <ImageTwo />
            <ImageThree />
            <ImageFour />
        </ImageContainer>
        <SquareContainer>
        </SquareContainer>
    </HomepageContainer>
  )
}

export default Homepage;