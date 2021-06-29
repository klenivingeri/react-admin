export function ButtonFilter(){
    return(
        <>
        <div className="Dashbell dropdown mr-1">
        <a class="btn btn-outline-primary btn-text-dark btn-h-primary btn-a-primary btn-bold radius-1 d-inline-flex align-items-center pl-3px py-3px mb-1"
                                        href="#" role="button" id="dropdownMenuLink10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="bgc-primary-d3 h-5 px-25 pt-2 ml-n1 my-n1 mr-2">
                                        <i class="fa fa-filter text-white text-120 mt-3px"></i>
                                    </span>
                                    Filter
                                </a>
        <div  className="" class="dropdown-menu testando DropArrowMenu dropdown-menu-right m-0 pt-1 p-0">
          
        <div className="tab-content p-0 m-0" id="myTabContent">
        <div className="tab-pane p-0 m-0 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

        <form autocomplete="off" class="dropdown-clickable text-grey-d2">
                                        <div class="dropdown-body py-3">
                                          <div class="form-group row justify-content-between align-items-center mx-1">
                                            <div class="col-6 col-form-label text-secondary">
                                              <label for="id-notifications" class="mb-0">Notifications</label>
                                            </div>
            
                                            <div class="col-6 text-right">
                                              <input type="checkbox" class="ace-switch text-grey-l1 bgc-red-d1 ace-switch-check radius-2px" id="id-notifications" />
                                            </div>
                                          </div>
            
                                          <div class="form-group row pt-3 justify-content-between align-items-center border-t-1 brc-secondary-l3 mx-1">
                                            <div class="col-6 col-form-label text-secondary">
                                              <label class="mb-0">Time Format</label>
                                            </div>
            
                                            <div class="col-6 text-right">
                                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <div role="button" class="btn btn-sm px-2 btn-outline-lightgrey btn-h-outline-warning btn-a-warning btn-a-bold border-2 active">
                                                  <input type="radio" name="options" checked="" />
                                                  24h
                                                </div>
                                                <div role="button" class="btn btn-sm px-2 btn-outline-lightgrey btn-h-outline-warning btn-a-warning btn-a-bold border-2">
                                                  <input type="radio" name="options" />
                                                  12h
                                                </div>
                                              </div>
                                            </div>
                                          </div>
            
                                          <div class="form-group row mb-0 pt-2 justify-content-between align-items-center border-t-1 brc-secondary-l3 mx-1">
                                            <div class="col-4 col-form-label text-secondary">
                                              <label class="mb-0">Opacity</label>
                                            </div>
            
                                            <div class="col-8 text-right">
                                              <div id="id-slider" class="noUi-toggle-tooltip mt-2 slider-thin"></div>
                                            </div>
                                          </div>
                                        </div>
            
                                        <div class="dropdown-footer py-25 bgc-white text-center pos-rel border-t-2 brc-secondary-l3">
                                          <button type="button" class="btn px-3 py-15 text-95 text-600 btn-primary btn-raised radius-1" data-dismiss="dropdown">
                                            Save settings
                                          </button>
                                          <button type="reset" class="btn px-25 py-15 text-95 btn-raised btn-outline-secondary radius-1" data-dismiss="dropdown">
                                            Cancel
                                          </button>
                                        </div>
                                      </form>
           
        </div>
        <div className="tab-pane fade p-0 m-0" id="profile" role="tabpanel" aria-labelledby="profile-tab">

            </div>
          </div>
        </div>
      </div>
    </>

    )
}