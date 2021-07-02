import '../../styles/header/header.scss'
import { Sidebar } from './menu/Sidebar'
import { Logo } from './Logo'
import { ButtonBurge } from './ButtonBurge'
import { Selection } from './Selection'
import { Perfil } from './Perfil'
import { Bell } from './Bell/Bell'


export function Header() {
  return (
    <div className="headerFloating">
      <nav className="container-fluid bg-white shadow-sm">
        <div className="row justify-content-between">
          <div className="col-7 d-flex justify-content-start align-items-center">
            <ButtonBurge />
            <Logo />
            <Sidebar />
          </div>
          <div className="col-5 d-flex justify-content-end align-items-center">
            <Selection />
            <Bell />
            <Perfil />
          </div>
        </div>
      </nav>
    </div>
  )
}