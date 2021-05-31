export function Notification(props){
    return(
        <a className="
            dropdown-item
            d-flex align-items-center 
            justify-content-between
            px-2
            " 
            href="#"
        >
            <div>
                <i className={`${props.icone} text-white text-110 mr-15 p-2 radius-1 bgc-${props.colorIcone}-tp1`}></i>
                <span className="text-muted">{props.children}</span>
            </div>
            <span className={`float-right badge badge-${props?.colorWarning} radius-round text-80`}>{props?.warning}</span>
        </a>
      
    )
}