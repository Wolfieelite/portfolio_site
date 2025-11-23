import { Link } from '@tanstack/react-router'

interface NavigationItemProp {
  title: string;
  url: string;
}

function Navigation() {
  return (
    <div className="navigation flex justify-center gap-5 mb-12 sticky top-0 z-[99] backdrop-blur-3xl">
      <div className="flex gap-3">
        <NavigationItem title="home" url="/" />
        <NavigationItem title="gallery" url="/gallery" />
        <NavigationItem title="about me" url="/aboutme" />
      </div>
    </div>
  )
}

function NavigationItem({ title, url }: NavigationItemProp) {
  return (
    <div className="text-[11px]">
      <button className="link-container">
        <Link className="capitalize" to={url}>{title}</Link>
      </button>
    </div>
  )
}
export default Navigation
