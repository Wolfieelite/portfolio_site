import { photos, letterMap, stringToLetter } from '../utilz/photos.js'
import { createFileRoute } from '@tanstack/react-router'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import 'react-photo-album/styles.css'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

interface Photo {
  title: string
  src: string
  category: string
  width: string
  height: string
}

function RouteComponent() {
  const [currentImage, setCurrentImage] = useState(-1)
  const groupped = photos.reduce<Record<string, Photo[]>>((acc, photo) => {
    stringToLetter(photo.title)
    if (!acc[photo.category]) acc[photo.category] = []
    acc[photo.category].push(photo)
    return acc
  }, {})

  return (
    <div className="p-8 space-y-12">
      {Object.entries(groupped).map(([category, items]) => (
        //Use category and photo title as current image id
        //and somehow map the strings into numbers
        <section className="text-4xl py6 flex flex-col gap-6" key={category}>
          <h2>{category}</h2>
          <PhotoAlbum
            onClick={(i) => {
              // setCurrentImage(i)
              stringToLetter(i)
            }}
            layout="masonry"
            columns={3}
            photos={items.map(({ src, width, height, title }) => ({
              src,
              width: parseInt(width),
              height: parseInt(height),
              alt: title,
            }))}
            sizes={{
              size: '1500px',
              sizes: [
                {
                  viewport: '(max-width: 556px)',
                  size: 'calc(100vw - 50%)',
                },
                {
                  viewport: '(max-widith: 420px)',
                  size: 'calc(100vw - 380px)',
                },
              ],
            }}
          />
          <Lightbox
            close={() => setCurrentImage(-1)}
            open={currentImage >= 0}
            index={currentImage}
            slides={items.map(({ src, title }) => ({ src, title }))}
          />
        </section>
      ))}
    </div>
  )
}
