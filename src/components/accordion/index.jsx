import './styles.scss'


export function Accordion(props){
    let id = props?.table.list.replaceAll('.', '')
    let style = {type:'',priority:''}
    
    if(props?.table.type == 'DVR'){

            style.type = 'bgc-primary-d3'

    }else if(props?.table.type == 'THM'){

        style.type = 'bgc-blue'

    }else if(props?.table.type == 'OKR'){

        style.type = 'bgc-grey-l4'

    }

    switch (props?.table.priority) {
        

    
        default:
            break;
    }
    return(
        <div className="accordion" id={'accordionExample'+ id}>
            
            <div className={`
                d-flex 
                text-white 
                text-white 
                align-items-center 
                justify-content-between
                ${style.type}`}
                id={'heading' + id}
                >
                
                <table
                    id="simple-table2" 
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
                        <td width="5%" className={`d-sm-table-cell  pos-rel text-center text-table-${props?.table.type != 'OKR'}`}>
                            <div class="position-tl h-100 ml-n1px border-l-4 brc-success-m1 v-active ac-poste" ></div>
                            { props?.table.list}</td>
                        <td width="5%">
                            <span className="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">{props?.table.type}</span>
                        </td>
                        <td width="30%"  className={`text-table-${props?.table.type != 'OKR'}`}>
                            
                            {props?.table.title}</td>
                        <td width="10%"></td>
                        <td width="10%"></td>
                        <td width="5%" className={`d-none d-sm-table-cell text-center cor${props?.table.priority}`}>
                            {props?.table.type ?  props?.table.priority : '' }                 </td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="7%"></td>
                        <td width="10%"></td>
                        <td width="3%" className="text-right">
                            <a className=" mr-2 collapsed" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    aria-expanded="true" 
                                    aria-controls="collapseOne"
                                    data-target={'#collapse'+ id}>
                            <i className={`fa  fa-angle-up text-center text-table-${props?.table.type != 'OKR'} `}></i>  
                                
                            </a>
                
                        </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
            <div id={'collapse' + id} className={`toggle-accordion${props?.table.type} collapse show`} aria-labelledby={'heading' + id} data-parent={'#accordionExample'+ id}>
            
                {props?.children}
        
            </div>
        </div>
    )
}