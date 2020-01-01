import React from 'react'
import Image from './Image'
import PropTypes from 'prop-types'
import {
  ImageWrapper,
  GalleryWrapper,
  GalleryNavigation
} from './Gallery.styles'

const Gallery = ({ slides }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [])

  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % slides.length)
  }

  const previousSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length)
  }

  const handleKeyEvent = ({ key }) => {
    switch (key) {
      case 'ArrowRight':
        nextSlide()
        return
      case 'ArrowLeft':
        previousSlide()
        return
      default:
        return
    }
  }

  return (
    <GalleryWrapper className="gallery">
      {slides.map(({ fields, sys }, index) => (
        <ImageWrapper
          key={sys.id}
          className={index === activeIndex ? 'active' : 'inactive'}
        >
          <Image content={fields} />
        </ImageWrapper>
      ))}
      <GalleryNavigation className="gallery-nav">
        <button className="previous_slide" onClick={nextSlide}>
          {'<'}
        </button>

        <button className="next_slide" onClick={previousSlide}>
          {'>'}
        </button>
      </GalleryNavigation>
    </GalleryWrapper>
  )
}

Gallery.propTypes = {
  slides: PropTypes.array
}

export default Gallery
