import { ButtonFilter } from "../ButtonFilter";

export function DashboardHeader(){
    return(
        <form autoComplete="off">
                <div class="d-flex justify-content-between align-items-center flex-column flex-sm-row mb-3 px-2 px-sm-0">
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
                            
                            <ButtonFilter />
                            
                        </div>
                    </div>

                    <div className="mb-2 mb-sm-0">
                        <a type="button" className="btn btn-blue px-3 d-block w-100 text-95 radius-round border-2 brc-black-tp10" data-toggle="modal" data-target="#aside-1">
                            <i className="fa fa-plus mr-1"></i> Add <span className="d-sm-none d-md-inline">New</span> 
                        </a>
                    </div>

                </div>
            </form>
    )
}