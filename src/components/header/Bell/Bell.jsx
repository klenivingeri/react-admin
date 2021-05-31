import { AbaMessage } from "./AbaMessage";
import { AbaNotification } from "./AbaNotification";
export function Bell(){
    return(
      <>
        <div className="bell dropdown mr-1">
          <a className="
            Hovereffect 
            d-flex 
            align-items-center
            justify-content-center
            px-2
            " 
            href="#" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
          >
            <i class="far fa-bell text-110 icon-animated-bell px-2" />
          </a>
          <div  className="" class="dropdown-menu testando DropArrowMenu dropdown-menu-right m-0 pt-1 p-0">
            <ul className="nav d-flex nav-tabs" id="myTab" role="tablist">
              <li className="nav-item metade" role="presentation">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  Notificação
                </a>
              </li>
              <li className="nav-item metade" role="presentation">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                  Menssagem
                </a>
              </li>
            </ul>
            <div className="tab-content p-0 m-0" id="myTabContent">
            <div className="tab-pane p-0 m-0 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <AbaNotification />
              <div className="dropdown-divider m-0"></div>
                <a className="dropdown-item d-flex align-items-center justify-content-center" href="#">
                  <span className="text-muted">See All Notifications</span>
                </a>
              </div>
              <div className="tab-pane fade p-0 m-0" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <AbaMessage />
              </div>
            </div>
          </div>
        </div>
      </>

    )
}