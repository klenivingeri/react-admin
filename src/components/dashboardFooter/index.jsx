export function DashboardFooter(){
    return(

        <div class="d-flex pl-4 pr-3 pt-35 border-t-1 brc-secondary-l3 flex-column flex-sm-row mt-n1px">
                        <div class="text-nowrap align-self-center align-self-sm-start">
                          <span class="d-inline-block text-grey-d2">Showing 1 - 10 of 152</span>
                          <select class="ml-3 ace-select no-border angle-down brc-h-blue-m3 w-auto pr-45 text-secondary-d3">
                            <option value="10">Show 10</option>
                            <option value="20">Show 20</option>
                            <option value="50">Show 50</option>
                          </select>
                        </div>
  
                        <div class="btn-group ml-sm-auto mt-3 mt-sm-0">
                          <a href="#" class="btn btn-lighter-default btn-bgc-white btn-a-secondary radius-l-1 px-3 border-2">
                            <i class="fa fa-caret-left mr-1"></i> Prev
                          </a>
                          <a href="#" class="btn btn-lighter-default btn-bgc-white btn-a-secondary radius-r-1 px-3 border-2 ml-n2px">
                            Next <i class="fa fa-caret-right ml-1"></i>
                          </a>
                        </div>
                      </div>
    )
}