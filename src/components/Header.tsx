import { Menu } from "./index"


export const Header = () => {
  return (
    <header className="p-2 text-white flex justify-between align-center mb-1">
      <a href="#"><img className="w-[100px]" src="/images/logo.svg" alt="logo" /></a>
      <Menu />
    </header>

  )
}