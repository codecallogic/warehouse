"use client"

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="w-full flex">
      {children}
    </div>
  )
}
