import ImageUI from 'components/ui/ImageUI'
import Image from 'next/image'
import React from 'react'

const MediaImage = ({media}) => {
  return (
    <ImageUI noloader={'true'} src={media} width="280" height="300"    unoptimized={true} />
  )
}

export default MediaImage
