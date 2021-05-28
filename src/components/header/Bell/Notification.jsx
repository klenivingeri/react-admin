export function Notification(){
    return(
        <>
      <a class="
      dropdown-item
      d-flex align-items-center 
      justify-content-between
      " 
      href="#"
    >
      <div>
      <i class="fab fa-twitter bgc-blue-tp1 text-white text-110 mr-15 p-2 radius-1"></i>
      <span class="text-muted">Followers</span>
      </div>
      <span class="float-right badge badge-danger radius-round text-80">- 4</span>
    </a>
    <a class="
      dropdown-item 
      d-flex align-items-center 
      justify-content-between
      " 
      href="#"
    >
      <div>
      <i class="fa fa-comment bgc-pink-tp1 text-white text-110 mr-15 p-2 radius-1"></i>
      <span class="text-muted">New Comments</span>
      </div>
      <span class="float-right badge badge-info radius-round text-80">+12</span>
    </a>
    <a class="
      dropdown-item 
      d-flex align-items-center 
      justify-content-between
      " 
      href="#"
    >
      <div>
      <i class="fa fa-shopping-cart bgc-success-tp1 text-white text-110 mr-15 p-2 radius-1"></i>
      <span class="text-muted">New Orders</span>
      </div>
      <span class="float-right badge badge-success radius-round text-80">+8</span>
    </a>
    <a class="
      dropdown-item 
      d-flex 
      align-items-center 
      justify-content-between
      " 
      href="#"
    >
      <i class="far fa-clock bgc-purple-tp1 text-white text-110 mr-15 p-2 radius-1"></i>
      <span class="text-muted">Finished processing data!</span>
    </a>
           

        <div class="dropdown-divider"></div>
        <a class="dropdown-item d-flex align-items-center justify-content-center" href="#">
          
          <span class="text-muted">See All Notifications</span>
          </a>
          </>

    )
}