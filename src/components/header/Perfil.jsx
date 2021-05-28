import { Avatar } from './Avatar'
import { Link } from 'react-router-dom'
export function Perfil(){
    return(

<div class="d-flex">
      <div class="dropdown ">
        <div class="btn-group">
          <a type="button"
              class="btn d-flex 
              align-items-center  Hovereffect m-0 p-0" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false" >
            <Avatar />
          </a>
          <div class="dropdown-menu DropArrowMenu dropdown-menu-right m-0 p-0" >

          <span class="my-2 d-flex align-items-center justify-content-center">Welcome, Jason</span>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item d-flex align-items-center " href="#">
            <i class="fa fa-user text-primary-m1 text-105 mr-1"></i> Profile
            </a>
            <a class="dropdown-item d-flex align-items-center " href="#">
            <i class="fa fa-cog text-success-m1 text-105 mr-1"></i> Settings
            </a>
            <div class="dropdown-divider"></div>
            <Link class="dropdown-item d-flex align-items-center Logout" to="/">
            <i class="fa fa-power-off text-orange-d2 text-105 mr-1"></i> Logout
            </Link>
          </div>



        </div>
        </div>
        </div>

   


    )
}