import Navigation from './Navigation'
import { uiImage } from '@/utilz/photos'
export default function Header() {
  return (
    <>
      <header className="header relative select-none">
        <img src={uiImage.webbanner.src} alt="banner image" />
        <div className="flex items-center justify-center w-full absolute  top-0">
          <h1 className="text-5xl">Wolfie's Portfolio</h1>
        </div>
      </header>
      <Navigation />
    </>
  )
}
