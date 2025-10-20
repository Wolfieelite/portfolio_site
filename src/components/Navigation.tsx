import { Link } from '@tanstack/react-router'

function Navigation() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-3">
        <div className="text-3xl">
          <button className="link-container">
            <Link to="/">Home</Link>
          </button>
        </div>
        <div className="text-3xl">
          <button className="link-contianer">
            <Link to="/gallery">Gallery</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
