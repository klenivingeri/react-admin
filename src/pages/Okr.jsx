import { Dashboard } from "../components/dashboard"
export default function Okr(){
    return(
        <Dashboard>

            <form autocomplete="off">
                <div class="d-flex justify-content-between flex-column flex-sm-row mb-3 px-2 px-sm-0">
                    <h3 class="text-125 pl-1 mb-3 mb-sm-0 text-secondary-d4">Drivers, Themes, OKRs</h3>

                    <div class="mb-2 mb-sm-0 ml-3">
                        <span id="tooltip-1" class="badge bgc-primary-d3 badge-sm text-white has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="Drivers">3</span> 
                        <span id="tooltip-2" class="badge bgc-blue badge-sm text-white has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="Themes">4</span> 
                        <span id="tooltip-3" class="badge bgc-grey-l4 badge-sm has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="OKRs">1</span> 
                        <span id="tooltip-4" class="badge bgc-white badge-sm has-active-border brc-black-tp7 border-1" data-toggle="tooltip" data-placement="top" title="KRs">10</span>
                    </div>

                    <div class="pos-rel ml-sm-auto mr-sm-2 order-last order-sm-0">
                        <i class="fa fa-search position-lc ml-25 text-primary-m1"></i>
                        <input type="text" class="form-control w-100 pl-45 radius-1 brc-primary-m4" placeholder="Search ..." />
                    </div>

                    <div class="mb-2 mb-sm-0 ml-2 mr-2">
                        <div class="dropdown dd-backdrop dd-backdrop-none-lg d-inline-block ml-3">
                            <button class="btn btn-outline-primary btn-text-dark btn-h-primary btn-a-primary btn-bold radius-1 d-inline-flex align-items-center pl-3px py-3px mb-1"
                                href="#" role="button" id="dropdownMenuLink10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="bgc-primary-d3 h-5 px-25 pt-2 ml-n1 my-n1 mr-2">
                                <i class="fa fa-filter text-white text-120 mt-3px"></i>
                            </span>
                                Filter
                            </button>
                            
                        
                        </div>
                    </div>

                    <div class="mb-2 mb-sm-0">
                        <button type="button" class="btn btn-blue px-3 d-block w-100 text-95 radius-round border-2 brc-black-tp10" data-toggle="modal" data-target="#aside-1">
                            <i class="fa fa-plus mr-1"></i> Add <span class="d-sm-none d-md-inline">New</span> 
                        </button>
                    </div>

                </div>
            </form>

            <table id="simple-table" class="mb-0 table table-borderless table-bordered-x brc-secondary-l3 text-dark-m2 radius-1 overflow-hidden table-ork">
                <thead class="text-dark-tp3 bgc-grey-l4 text-80 border-b-1 brc-transparent">
                    <tr>
                    <th class="d-sm-table-cell text-center">#</th>
                    <th>Type</th>
                    <th>Goal</th>
                    <th>Team</th>
                    <th>Owner</th>
                    <th class="d-none d-sm-table-cell text-center">Priority</th>
                    <th class="col-metric-low text-center">80%</th>
                    <th class="col-metric-target text-center">100%</th>
                    <th class="col-metric-high text-center">120%</th>
                    <th class="text-center">Metric</th>
                    <th>Status</th>
                    <td class="text-right">
                        <button type="button" class="btn btn-xs btn-outline-default btn-h-outline-white btn-h-text-blue btn-a-outline-white btn-bold btn-brc-tp">
                            
                            <i class="fa fa-angle-up text-center"></i>
                        </button>
                    </td>
                    </tr>
                </thead>

                <tbody class="mt-1 text-80">


                <tr class="bgc-primary-d3 text-white">
                            <td class="text-center pr-0 pos-rel">
                              
                              <div class="position-tl h-100 ml-n1px border-l-4 brc-success-m1 v-active"></div>
                              <label>1</label>
                            </td>
                            <td>
                                <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">DRV</span>
                            </td>
                            <td>Crescimento Exponencial</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">
                                <button type="button" class="btn btn-xs btn-outline-white btn-h-outline-white btn-h-text-blue btn-a-outline-white btn-bold btn-brc-tp">
                                    <i class="fa fa-angle-up text-center text-white"></i>
                                </button>
                            </td>
                          </tr>
  
                          <tr class="bgc-blue text-white">
                              <td class="text-center pr-0 pos-rel">
                                  <div class="position-tl h-100 ml-n1px border-l-4 brc-success-m1 v-active"></div>
                                  <label>1.1</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">THM</span>
                              </td>
                              <td>Base de Clientes</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td class="text-right">
                                  <button type="button" class="btn btn-xs btn-outline-white btn-h-outline-white btn-h-text-blue btn-a-outline-white btn-bold btn-brc-tp">
                                      <i class="fa fa-angle-up text-center text-white"></i>
                                  </button>
                              </td>
                          </tr>
  
                          <tr class="bgc-h-yellow-l4 d-style">
                              <td class="text-center pr-0 pos-rel">
                                
                                <div class="position-tl h-100 ml-n1px border-l-4 brc-orange-m1 v-hover"></div>
                                <label>1.1.1</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">KR</span>
                              </td>
                              <td>Base ativa de clientes recorrentes</td>
                              <td>Corp</td>
                              <td>Fred</td>
                              <td class="bgc-priority-100 text-center">1000</td>
                              <td class="col-metric-low text-center">10,0</td>
                              <td class="col-metric-target text-center">11,0</td>
                              <td class="col-metric-high text-center">12,0</td>
                              <td>Soma Mensal</td>
                              <td><span class='badge badge-sm bgc-green-d1 text-white pb-1 px-25'>Approved</span></td>
                              <td></td>
                          </tr>
  
                          <tr class="bgc-h-yellow-l4 d-style">
                              <td class="text-center pr-0 pos-rel">
                                  
                                  <div class="position-tl h-100 ml-n1px border-l-4 brc-orange-m1 v-hover"></div>
                                  <label>1.1.2</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">KR</span>
                              </td>
                              <td>Venda de novas lojas</td>
                              <td>Operações</td>
                              <td>Fabrício</td>
                              <td class="bgc-priority-90 text-center">950</td>
                              <td class="col-metric-low text-center">400MM</td>
                              <td class="col-metric-target text-center">500MM</td>
                              <td class="col-metric-high text-center">600MM</td>
                              <td>Padrão</td>
                              <td><span class='badge badge-sm bgc-info-d1 text-white pb-1 px-25'>Review</span></td>
                              <td></td>
                          </tr>
  
                          <tr class="bgc-h-yellow-l4 d-style">
                              <td class="text-center pr-0 pos-rel">
                                 
                                  <div class="position-tl h-100 ml-n1px border-l-4 brc-orange-m1 v-hover"></div>
                                  <label>1.1.3</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">KR</span>
                              </td>
                              <td>Venda total Mobile Remoto</td>
                              <td>Operações</td>
                              <td>Fabrício</td>
                              <td class="bgc-priority-80 brc-orange-m1 text-center">800</td>
                              <td class="col-metric-low text-center">400MM</td>
                              <td class="col-metric-target text-center">500MM</td>
                              <td class="col-metric-high text-center">600MM</td>
                              <td>Padrão</td>
                              <td><span class='badge badge-sm bgc-info-d1 text-white pb-1 px-25'>Review</span></td>
                              <td></td>
                          </tr>
  
                          <tr class="bgc-blue text-white">
                              <td class="text-center pr-0 pos-rel">
                                  <div class="position-tl h-100 ml-n1px border-l-4 brc-success-m1 v-active"></div>
                                  <label>1.2</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">THM</span>
                              </td>
                              <td>Marketplace</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td class="text-right">
                                  <button type="button" class="btn btn-xs btn-outline-white btn-h-outline-white btn-h-text-blue btn-a-outline-white btn-bold btn-brc-tp">
                                      <i class="fa fa-angle-up text-center text-white"></i>
                                  </button>
                              </td>
                          </tr>
  
                          <tr class="bgc-h-yellow-l4 d-style">
                              <td class="text-center pr-0 pos-rel">
                                  
                                  <div class="position-tl h-100 ml-n1px border-l-4 brc-orange-m1 v-hover"></div>
                                  <label>1.2.1</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">KR</span>
                              </td>
                              <td>GMV do Marketplace em Loja física</td>
                              <td>Marketplace</td>
                              <td>Rego</td>
                              <td class="bgc-priority-70 text-center">750</td>
                              <td class="col-metric-low text-center">100MM</td>
                              <td class="col-metric-target text-center">110MM</td>
                              <td class="col-metric-high text-center">120MM</td>
                              <td>Soma Mensal</td>
                              <td><span class='badge badge-sm bgc-warning-d1 text-white pb-1 px-25'>Pending</span></td>
                              <td></td>
                          </tr>
  
                          <tr class="bgc-h-yellow-l4 d-style">
                              <td class="text-center pr-0 pos-rel">
                                 
                                  <div class="position-tl h-100 ml-n1px border-l-4 brc-orange-m1 v-hover"></div>
                                  <label>1.2.2</label>
                              </td>
                              <td>
                                  <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">KR</span>
                              </td>
                              <td>GMV Nova Safra</td>
                              <td>Marketplace</td>
                              <td>Leandro</td>
                              <td class="bgc-priority-60 text-center">700</td>
                              <td class="col-metric-low text-center">1.5Bi</td>
                              <td class="col-metric-target text-center">2.0Bi</td>
                              <td class="col-metric-high text-center">2.5Bi</td>
                              <td>Média Mensal</td>
                              <td><span class='badge badge-sm bgc-red-d1 text-white pb-1 px-25'>Rejected</span></td>
                              <td></td>
                          </tr>


                </tbody>
            </table>



        </Dashboard>


        
    )
}