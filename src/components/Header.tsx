import Navigation from './Navigation'
export default function Header() {
  return (
    <>
      <div className="header relative select-none">

        <img className="" src="/ui/Header/web-banner.png" alt="banner image" />
        <div className="flex items-center justify-center w-full absolute  top-0">
          <h1 className="text-5xl">Wolfie's Portfolio</h1>
        </div>
      </div>
      <Navigation />
    </>
  )
}
