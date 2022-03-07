import styled from 'styled-components';
import ImgBrunch from '../../images/brunch.jpeg'; 
import ImgHotel from '../../images/hotel.jpeg';
import ImgPic from '../../images/pic.jpeg';
import ImgSf from '../../images/sf.jpeg';

export const HomepageContainer = styled.div`
    background-color: #F4F0E7;
    height: 750px;
    position: relative;
`
export const ImageContainer = styled.ul`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr;
    align-content: space-between;
`
export const ImageOne = styled.img.attrs({
    src: `${ImgPic}`
})`
    width: 400px; 
`


export const ImageTwo = styled.img.attrs({
    src: `${ImgBrunch}`
})`
    width: 400px; 
    justify-self: end;
`

export const ImageThree = styled.img.attrs({
    src: `${ImgSf}`
})`
    height: 350px;
    align-self: end;
`

export const ImageFour = styled.img.attrs({
    src: `${ImgHotel}`
})`
    width: 400px; 
    justify-self: end;
    align-self: end;
`

export const SquareContainer = styled.div`
    width: 400px;
    background-color: #AFE1AF;
    z-index: 2;
` 