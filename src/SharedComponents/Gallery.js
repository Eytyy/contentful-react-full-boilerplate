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
  const [visibleSlides, updateVisibleSlides] = React.useState([
    slides[0],
    slides[1]
  ])

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [])

  const nextSlide = () => {
    if (slides.length > visibleSlides.length) {
      updateVisibleSlides(prevSlides => {
        return [...prevSlides, slides[visibleSlides.length]]
      })
    }
    setActiveIndex(prevIndex => (prevIndex + 1) % visibleSlides.length)
  }

  const previousSlide = () => {
    setActiveIndex(
      prevIndex => (prevIndex - 1 + visibleSlides.length) % visibleSlides.length
    )
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
      {visibleSlides.map(({ fields, sys }, index) => (
        <ImageWrapper
          key={sys.id}
          className={index === activeIndex ? 'active' : 'inactive'}
        >
          <Image content={fields} />
        </ImageWrapper>
      ))}
      <GalleryNavigation className="gallery-nav">
        <button
          className={`previous_slide ${activeIndex > 0 ? 'visible' : 'hidden'}`}
          onClick={previousSlide}
        >
          {'<'}
        </button>

        <button
          className={`next_slide ${
            activeIndex < slides.length - 1 ? 'visible' : 'hidden'
          }`}
          onClick={nextSlide}
        >
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
