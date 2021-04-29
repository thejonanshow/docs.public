import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './styles/themeContext'

const ImageBlockContainer = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  margin: 2em 0;
  padding-bottom: 1em;
`

const ImageBlockImage = styled.img`
  margin: 0;
  max-width: 100%;
  border-radius: 6px;
`

const ImageBlockCaption = styled.figcaption`
  font-size: 12px;
  color: var(--text-secondary);
`

export default function ImageBlock(props) {
  const { alt, src } = props
  const [imageURL, setImageURL] = useState(src)
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    const activeThemeSuffix = themeContext.getActiveMode().name
    if (src.split('_light').length > 1) {
      setImageURL(src.split('_light').join(`_${activeThemeSuffix}`))
    }
  }, [themeContext])

  return (
    <ImageBlockContainer>
      <ImageBlockImage src={imageURL} alt={alt}></ImageBlockImage>
      <ImageBlockCaption>{alt}</ImageBlockCaption>
    </ImageBlockContainer>
  )
}
