import { Link } from "@tanstack/react-router"
import React from "react"

interface ContentProp {
  title: string
  className: string
  children?: React.ReactNode
  url: string
}

function Content({ title, className, url, children }: ContentProp) {
  return (
    <Link to={url}>
      <section className={`flex justify-center items-center cursor-pointer snap-center  ${className}`} >
        <h1 className="capitalize absolute text-5xl backdrop-blur-sm py-1.5">{title}</h1>
        {children}
      </section >
    </Link>
  )
}

export default Content;
