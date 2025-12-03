import React from "react"

interface ContentProp {
  title: string
  className: string
  children?: React.ReactNode
}

function Content({ title, className, children }: ContentProp) {
  return (
    <section className={`flex justify-center items-center cursor-pointer snap-center ${className}`} >
      <h1 className="capitalize absolute text-5xl backdrop-blur-sm py-1.5">{title}</h1>
      {children}
    </section >
  )
}

export default Content;
