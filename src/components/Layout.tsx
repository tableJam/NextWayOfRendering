import { VFC,ReactNode } from "react"
import {BadgeCheckIcon} from "@heroicons/react/solid"
interface LayoutProp {
  children: any,
  title: string
}
const Layout = (prop:LayoutProp) => {
  const children = prop.children;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-white">
      <p>👨🏻‍🚀 what do you have to do?</p>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex items-center h-12 justify-center border-t border-gray-10 w-6/12">
        <BadgeCheckIcon className="h-6 w-6 text-blue-500"/>
        <p className="text-gray-300">{'     '}supabase + Next.js</p>
      </footer>
    </div>
  )
}

export default Layout