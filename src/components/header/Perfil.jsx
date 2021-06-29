import { Avatar } from './Avatar'
import { Link } from 'react-router-dom'
export function Perfil(){
    return(
      <div className="d-flex">
        <div className="dropdown ">
          <div class="btn-group">
            <a type="button"
                className="btn d-flex 
                align-items-center  Hovereffect m-0 p-0" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false" >
              <Avatar />
            </a>
            <div className="dropdown-menu DropArrowMenu dropdown-menu-right m-0 p-0" >

            <span className="my-2 d-flex align-items-center justify-content-center">Welcome, Jason</span>

            <div className="dropdown-divider"></div>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="fa fa-user text-primary-m1 text-105 mr-1"></i> Profile
              </a>
              <a className="dropdown-item d-flex align-items-center " href="#">
                <i className="fa fa-cog text-success-m1 text-105 mr-1"></i> Settings
              </a>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item d-flex align-items-center Logout" to="/">
                <i className="fa fa-power-off text-orange-d2 text-105 mr-1"></i> Logout
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    )
}