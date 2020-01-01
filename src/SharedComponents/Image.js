import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ content }) => {
  return (
    <img
      alt={content.title}
      srcSet={`${content.file.url}?w=500 500w, ${content.file.url}?w=728 728w, ${content.file.url}?w=900 900w, ${content.file.url}?w=1280 1280w, ${content.file.url}?w=1920 1920w`}
      sizes="(max-width: 580px) 500px, 
				(max-width: 768px) 728px, 
				(max-width: 1024px) 904px, 
				(max-width: 1440px) 1280px, 
				1920px"
      src={`${content.file.url}?w=1920`}
    />
  )
}

Image.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.object
  })
}

export default Image
