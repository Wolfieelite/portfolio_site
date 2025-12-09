import { uiImage } from '@/utilz/photos';
import { Link } from '@tanstack/react-router'

interface NavigationItemProp {
  title: string;
  url: string;
}

function Navigation() {
  return (
    <nav className="navigation top-0 sticky flex gap-12 justify-center z-50 backdrop-blur-3xl">
      <Link className='no-underline' to="/"><img src={uiImage.logo.src} /></Link>
      <ul className="flex gap-3 items-center">
        <NavigationItem title="home" url="/" />
        <NavigationItem title="gallery" url="/gallery" />
        <NavigationItem title="about me" url="/aboutme" />
      </ul>
    </nav>
  )
}

function NavigationItem({ title, url }: NavigationItemProp) {
  return (
    <li className="text-sm text-yellow-600">
      <button className="link-container">
        <Link className="" to={url}>{title}</Link>
      </button>
    </li >
  )
}
export default Navigation
