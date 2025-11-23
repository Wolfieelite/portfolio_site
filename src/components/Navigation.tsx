import { Link } from '@tanstack/react-router'

function Navigation() {
  return (
    <div className="navigation flex justify-center gap-5 mb-12 sticky top-0 z-[99] backdrop-blur-3xl">
      <div className="flex gap-3">
        <div className="text-3xl">
          <button className="link-container">
            <Link className="capitalize" to="/">Home</Link>
          </button>
        </div>
        <div className="text-3xl">
          <button className="link-contianer">
            <Link className="capitalize" to="/gallery">Gallery</Link>
          </button>
        </div>
        <div className="text-3xl">
          <button className="link-container">
            <Link className="capitalize" to="/aboutme">About me</Link>
          </button>
        </div>
      </div>
    </div >
  )
}

export default Navigation
