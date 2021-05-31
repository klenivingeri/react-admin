
import { DropRoadmap } from './DropRoadmap'
import { DropMore } from './DropMore'
import { Link } from 'react-router-dom'
export function Sidebar(){
    return (

        <div className=" d-flex w-100 justify-content-between align-items-center">
        
          <Link className="
            p-2  
            Hovereffect 
            d-flex 
            align-items-center 
            bd-highlight
            "
            to="/"
          >
            <i class="nav-icon fa fa-home" />
            <span className="px-2">Home</span>
          </Link>
  
          <Link className="
            p-2  
            Hovereffect 
            d-flex 
            align-items-center 
            bd-highlight
            "
            to="/page/Okr"
          >
            <i class="nav-icon fa fa-bullseye" />
            <span className="px-2">OKR</span>
          </Link>

          <Link className="
            p-2  
            Hovereffect 
            d-flex 
            align-items-center 
            bd-highlight
            "
            to="/page/Initiatives"
          >
            <i class="nav-icon fa fa-tools" />
            <span className="px-2">Initiatives</span>
          </Link>
          
          <div class="dropdown mr-1">
            <a className="
            btn
            p-2 
            Hovereffect
            d-flex align-items-center 
            bd-highlight
            "
            data-toggle="dropdown"
            id="dropRoadmap"
            aria-haspopup="true" 
            aria-expanded="false" 
          >
            <i class="nav-icon fa fa-road"/>
            <span className="px-2">Roadmap</span>
          </a>
            <DropRoadmap />
          </div>

          <div class="dropdown mr-1">
          <a className="
            btn
            p-2 
            Hovereffect 
            d-flex 
            align-items-center 
            bd-highlight
            " 
            data-toggle="dropdown" 
            id="dropMore"
            aria-haspopup="true" 
            aria-expanded="false"
          >
            <i class="nav-icon fa fa-tag" />
            <span className="px-2">More</span>
          </a>
          <DropMore />
          </div>
 </div>

    )
}
