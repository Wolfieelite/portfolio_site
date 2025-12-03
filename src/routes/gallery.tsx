import { photos } from '../utilz/photos.js'
import { createFileRoute } from '@tanstack/react-router'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import 'react-photo-album/styles.css'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <h1 className="text-2xl pl-32">Art gallery</h1>
      <div className="p-32 space-y-12">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          spacing={40} />
        <Lightbox slides={photos} index={index} open={index >= 0} close={() => setIndex(-1)} />
      </div>
    </>
  )
}
