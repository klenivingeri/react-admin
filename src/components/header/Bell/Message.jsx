export function Message(props){


    return(
        <a className="
            dropdown-item 
            d-flex
            align-items-center 
            align-self-start 
            pl-2
            my-1
            " 
            href="#"
          >
            <img alt={props.name + 'avatar'} src={props.avatar} width="35" className="align-self-start border-1 mr-1  radius-round" />
            <div>
                <span className="text-primary-m1 font-bolder">{props.name}:</span>
                <span className="text-grey text-80">{props.children}</span>
            </div> 
            </a>
    )

}