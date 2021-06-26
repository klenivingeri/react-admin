
import { Dashboard } from "../components/dashboard"
import { Table } from "../components/table/Table"
import { useEffect } from "react";
//var table  =  document.getElementById("tbody-id").children
export default function Okr(){
    var el = ''
    var elthm = ''
    var active = []
    

    useEffect(()=>{

        el = document.querySelectorAll(".toggle-accordion")
        console.log(el)
    },[]);


    const  handleToggle = () => {
        
        active = toggleCheck(el)

        toggleShow(active.reduce((total, currentElement) => total + currentElement))
    }

    const toggleCheck = () =>{

        active = []

        el.forEach( index => {

            if(index.classList.contains('show')){

                active.push(1);

            }else{

                active.push(0);
            }
        })

        return active
       
    }

    const toggleShow = (checked) => {
       
        el.forEach( index =>{

            if(checked == 0 ){
                
                index.classList.add('show')

            } else{

                index.classList.remove('show')
            }
        })
    }
    
    return(
        <>
        <Dashboard>

            <form autoComplete="off">
                <div class="d-flex justify-content-between flex-column flex-sm-row mb-3 px-2 px-sm-0">
                    <h3 className="text-125 pl-1 mb-3 mb-sm-0 text-secondary-d4">Drivers, Themes, OKRs</h3>

                    <div className="mb-2 mb-sm-0 ml-3">
                        <span id="tooltip-1" className="badge bgc-primary-d3 badge-sm text-white has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="Drivers">3</span> 
                        <span id="tooltip-2" className="badge bgc-blue badge-sm text-white has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="Themes">4</span> 
                        <span id="tooltip-3" className="badge bgc-grey-l4 badge-sm has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="OKRs">1</span> 
                        <span id="tooltip-4" className="badge bgc-white badge-sm has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="KRs">10</span>
                    </div>

                    <div className="pos-rel ml-sm-auto mr-sm-2 order-last order-sm-0">
                        <i className="fa fa-search position-lc ml-25 text-primary-m1"></i>
                        <input type="text" className="form-control w-100 pl-45 radius-1 brc-primary-m4" placeholder="Search ..." />
                    </div>

                    <div className="mb-2 mb-sm-0 ml-2 mr-2">
                        <div className="dropdown dd-backdrop dd-backdrop-none-lg d-inline-block ml-3">
                            <button className="btn btn-outline-primary btn-text-dark btn-h-primary btn-a-primary btn-bold radius-1 d-inline-flex align-items-center pl-3px py-3px mb-1"
                                href="#" role="button" id="dropdownMenuLink10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="bgc-primary-d3 h-5 px-25 pt-2 ml-n1 my-n1 mr-2">
                                <i className="fa fa-filter text-white text-120 mt-3px"></i>
                            </span>
                                Filter
                            </button>
                            
                        
                        </div>
                    </div>

                    <div className="mb-2 mb-sm-0">
                        <button type="button" className="btn btn-blue px-3 d-block w-100 text-95 radius-round border-2 brc-black-tp10" data-toggle="modal" data-target="#aside-1">
                            <i className="fa fa-plus mr-1"></i> Add <span className="d-sm-none d-md-inline">New</span> 
                        </button>
                    </div>

                </div>
            </form>
            <table id="simple-table1" className="mb-0 table table-borderless table-bordered-x brc-secondary-l3 text-dark-m2 radius-1 overflow-hidden table-ork">
                <thead className="text-dark-tp3 bgc-grey-l4 text-80 border-b-1 brc-transparent">
                    <tr >
                    <th width="5%"className="d-sm-table-cell text-center">#</th>
                    <th width="5%">Type</th>
                    <th width="30%">Goal</th>
                    <th width="10%">Team</th>
                    <th width="10%">Owner</th>
                    <th width="5%" className="d-none d-sm-table-cell text-center">Priority</th>
                    <th width="5%" className="col-metric-low text-center">80%</th>
                    <th width="5%" className="col-metric-target text-center">100%</th>
                    <th width="5%" className="col-metric-high text-center">120%</th>
                    <th width="10%" className="text-center">Metric</th>
                    <th width="7%" >Status</th>
                    <td width="3%" className="text-right">
                        <a  type="button" id="collapsed-total"  onClick={handleToggle} className="mr-2 collapsed">
                            <i className="fa fa-angle-up text-center"></i>
                        </a>
                    </td>
                    </tr>
                </thead>
            </table>

            <Table/>
            
        </Dashboard>


    </>
    )
}