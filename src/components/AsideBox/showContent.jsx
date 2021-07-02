export function ShowContent(props) {

    return (
        <div class={`tab-pane ${props?.show} text-95 ${props?.active} text-85`} id={props.id} role="tabpanel" aria-labelledby={`${props.id}-tab-btn`}>
            {props.children}
        </div>
    )
}