import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Content from '@/components/Content'
import { createFileRoute } from '@tanstack/react-router'
import { uiImage } from '@/utilz/photos'
import { useRef } from "react"


export const Route = createFileRoute('/')({
  component: App,
})


function App() {
  const contentRef = useRef(null)

  return (
    <>
      <main id="smoothe-wrapper" className="flex gap-96 flex-col snap-y snap-mandatory" ref={contentRef}>
        <Content className="content game-asset-content" title="Game Assets" url="/gallery/#64x64 pixle art">
          <img className='w-full' src={uiImage.gameassetBanner.src} alt="" />
        </Content>

        <Content className="content tile-map-content" title="Tile maps">
          <img className="w-full" src={uiImage.tilemapBanner.src} alt="" />
        </Content>

        <Content className="content character-design-content hidden" title="character design">
          <img className="w-full" src={uiImage.characterBanner.src} />
        </Content>

        <Content className="content interior-design-content hidden" title="interior design">
          <img className="w-full" src={uiImage.interiorBanner.src} alt="" />
        </Content>

        <Content className="content animation-content hidden" title="Animation"></Content>

        <Content className="content games-content hidden" title="Games"> </Content>
      </main>
    </>
  )
}
