import { photos } from '../utilz/photos.js'
import { createFileRoute } from '@tanstack/react-router'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/plugins/captions.css";
import 'yet-another-react-lightbox/styles.css'
import 'react-photo-album/styles.css'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  const [index, setIndex] = useState(-1)
  const groupedPhotos = photos.reduce((acc, photo) => {
    const { category } = photo;
    if (!acc[category]) acc[category] = [];
    acc[category].push(photo);
    return acc;
  }, {} as Record<string, typeof photos[number][]>);

  return (
    <>
      <div className="p-32 space-y-12">
        {
          Object.entries(groupedPhotos).map(([category, photos]) => (
            <section className="backdrop-blur-lg" key={category} id={category}>
              <h1 className="text-yellow-600 backdrop-blur-3xl capitalize text-3xl sticky top-15 pb-2 -z-50">{category}</h1>
              <PhotoAlbum
                layout={'masonry'}
                photos={photos}
                onClick={({ photo }) => setIndex(photo.globalIndex)}
                spacing={60} />
            </section>
          ))
        }

        <Lightbox
          slides={photos}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  )
}
