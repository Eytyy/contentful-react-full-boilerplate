import styled from 'styled-components'
import { Vairables } from '../Styles'
import { CommonStyles } from '../Styles'

export const GalleryWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`

export const GalleryNavigation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
	mix-blend-mode: difference;

  button {
    ${CommonStyles.strippedFormElementStyle}
		font-family: ${Vairables.fonts.title};
		font-size: 62px;
		color: ${Vairables.colors.blue};
    visibility: hidden;
  }
  .next_slide {
    text-align: right;
    &.visible {
      visibility: visible;
    }
  }
  .previous_slide {
    text-align: left;
    &.visible {
      visibility: visible;
    }
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 200ms ease-in-out;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  &.inactive {
    opacity: 0;
    z-index: 0;
  }
  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
`
