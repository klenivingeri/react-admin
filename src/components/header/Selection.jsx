export function Selection(){
    return (
            <>
              <i class="fa fa-building text-110 mr-1"></i>&nbsp;
              <form>
                <div class="form-row align-items-center">
                  <div class="col-auto mr-1 ">
                    <select class="custom-select mr-2" id="inlineFormCustomSelect">
                      <option selected>Choose...</option>
                      <option value='MGLU'>Magalu</option>
                      <option value='NETS'>Netshoes</option>
                    </select>
                  </div>
                </div>
              </form>
            </>
    )
}