import { createFileRoute } from '@tanstack/react-router'
import { uiImage } from '@/utilz/photos'
import Content from '@/components/Content'

export const Route = createFileRoute('/')({
  component: App,
})


function App() {

  return (
    <>
      <main id="smoothe-wrapper" className="flex gap-96 flex-col" >
        <Content className="content game-asset-content" title="Game Assets" url="/gallery/#64x64pixleart">
          <img className='w-full' src={uiImage.gameassetBanner.src} alt="" />
        </Content>

        <Content className="content tile-map-content" title="Tile maps" url="/gallery/#tilemap">
          <img className="w-full" src={uiImage.tilemapBanner.src} alt="" />
        </Content>

        <Content className="content landscape-content" title="landscape" url="/gallery/#landscape">

          <img className="w-full" src={uiImage.characterBanner.src} />
        </Content>

        <Content className="content character-design-content" title="character design" url="/gallery/#characterdesign">
          <img className="w-full" src={uiImage.characterBanner.src} />
        </Content>

        <Content className="content interior-design-content" title="interior design" url="/gallery/#interiordesign">
          <img className="w-full" src={uiImage.interiorBanner.src} alt="" />
        </Content>

        <Content className="content animation-content" title="Animation" url="/gallery/#animation">
          <img className="w-full" src={uiImage.characterBanner.src} />
        </Content>

        <Content className="content games-content" title="Games" url="/gallery/#games">
          <img className="w-full" src={uiImage.characterBanner.src} />
        </Content>
      </main>
    </>
  )
}
