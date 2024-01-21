"use client"

//// COMPONENTS
import SideNav from '@/app/_components/_account/sideNav'

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="w-full flex">
      <main className="relative ">
        <SideNav/>
      </main>
      {children}
    </div>
  )
}
