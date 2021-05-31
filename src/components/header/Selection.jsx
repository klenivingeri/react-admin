export function Selection(){
    return (
            <>
              <i className="fa fa-building text-110 mr-1"></i>&nbsp;
              <form>
                <div className="form-row align-items-center">
                  <div className="col-auto mr-1 ">
                    <select className="custom-select mr-2" id="inlineFormCustomSelect">
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