import './styles.scss'


export function Accordion(props){
    let id = props.table.list.replace('.', '')
    let style = ''
    if(props.table.type == 'DVR'){
            style = 'bgc-primary-d3'
    }else(
        style = 'bgc-blue'
    )

    
    return(
        <div className="accordion" id={'accordionExample'+ id}>
            
            <div className={`
                d-flex 
                text-white 
                text-white 
                align-items-center 
                justify-content-between
                ${style}`}
                id={'heading' + id}
                >
                
                <table id="title-table" 
                    className="
                            mb-0 
                            table 
                            table-borderless 
                            table-bordered-x 
                            brc-secondary-l3 
                            text-dark-m1 
                            radius-1 
                            overflow-hidden 
                            table-ork"
                            >
                    <tbody className="text-dark-tp3 text-80 border-b-1 brc-transparent">
                        <tr>
                        <td width="5%"className="d-sm-table-cell text-center">{props.table.list}</td>
                        <td width="5%">
                            <span className="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">{props.table.type}</span>
                        </td>
                        <td width="30%">{props.table.title}</td>
                        <td width="10%"></td>
                        <td width="10%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="7%"></td>
                        <td width="10%"></td>
                        <td width="3%" className="text-right">
                            <button className="btn btn-link m-0 py-0  collapsed" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    aria-expanded="true" 
                                    aria-controls="collapseOne"
                                    data-target={'#collapse'+ id}>
                            <i className="fa fa-xs fa-angle-up text-center text-white "></i>       
                            </button>
                
                        </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
            <div id={'collapse' + id} className=" collapse show" aria-labelledby={'heading' + id} data-parent={'#accordionExample'+ id}>
            
                {props.children}
        
            </div>
        </div>
    )
}