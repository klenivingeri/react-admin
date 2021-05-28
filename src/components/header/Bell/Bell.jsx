import { Message } from "./Message";
import { Notification } from "./Notification";
export function Bell(){
    return(
      <>
        <div class="bell dropdown mr-1">
          <a className="
            Hovereffect 
            d-flex 
            align-items-center
            justify-content-center
            px-3
            " 
            href="#" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
          >
            <i class="far fa-bell text-110 icon-animated-bell px-2" />
          </a>
          <div  className="" class="dropdown-menu testando DropArrowMenu dropdown-menu-right m-0 pt-1 p-0">
            <ul class="nav d-flex nav-tabs" id="myTab" role="tablist">
              <li class="nav-item metade" role="presentation">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  Notificação
                </a>
              </li>
              <li class="nav-item metade" role="presentation">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                  Menssagem
                </a>
              </li>
            </ul>
            <div class="tab-content p-0 m-0" id="myTabContent">
            <div class="tab-pane p-0 m-0 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <Notification />
            </div>
            <div class="tab-pane fade p-0 m-0" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <Message />
            </div>
          </div>



          </div>
        </div>
      </>

    )
}