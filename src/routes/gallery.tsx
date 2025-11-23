import { photos, letterMap } from '../utilz/photos.js'
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
  return (
    <div className="p-32 space-y-12">
      <PhotoAlbum layout="masonry" photos={photos} onClick={(i) => console.log(i)} spacing={40} />
    </div>
  )
}
