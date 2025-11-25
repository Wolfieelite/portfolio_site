import { Link } from '@tanstack/react-router'

interface NavigationItemProp {
  title: string;
  url: string;
}

function Navigation() {
  return (
    <nav className="navigation flex justify-center gap-5 mb-12 sticky top-0 z-[99] backdrop-blur-3xl">
      <ul className="flex gap-3">
        <NavigationItem title="home" url="/" />
        <NavigationItem title="gallery" url="/gallery" />
        <NavigationItem title="about me" url="/aboutme" />
      </ul>
    </nav>
  )
}

function NavigationItem({ title, url }: NavigationItemProp) {
  return (
    <li className="text-sm">
      <button className="link-container">
        <Link className="capitalize" to={url}>{title}</Link>
      </button>
    </li>
  )
}
export default Navigation
