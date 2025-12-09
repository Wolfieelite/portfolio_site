import { uiImage } from '@/utilz/photos'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/aboutme')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className="bio w-1/2 m-auto border-2 ">
      <img src={uiImage.wolfLogo.src} height={"80%"} width={"80%"} />
      <h2 className="text-2xl text-center mt-4">About me!</h2>
      <p className="p-6">Hello! My name is Chris. I am a beginner level game developer, digital artist, and creative writer who started this journey in 2021 and still continuing to learn and grow. My goal is to create games where it's both visually appealing and in depth in storytelling. My spark comes from several other games Stray and The Last Guardian where gameplay and story lore are touching for many players.</p>
    </div>
  </div>
}
