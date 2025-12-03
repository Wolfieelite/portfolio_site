import Content from '@/components/Content'
import Games from '@/components/Games'
import { createFileRoute } from '@tanstack/react-router'
import { uiImage } from '@/utilz/photos'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <main id="smoothe-wrapper" className="flex gap-96 flex-col snap-y snap-mandatory">
        <Content title="Game Assets">
          <img className='w-full' src={uiImage.gameassetBanner.src} alt="" />
        </Content>

        <Content title="Tile maps">
          <img className="w-full" src={uiImage.tilemapBanner.src} alt="" />
        </Content>

        <Content title="character design"></Content>

        <Content title="interior design"></Content>

        <Content title="Animation"></Content>

        <Content title="Games"> </Content>
      </main>
    </>
  )
}
