
import './styles.scss'
export function AsideBox() {
    return (

        <div className="asidebox">
            <div className="scroll">

                <div class="modal-content shadow border-0 radius-0">
                    <div class="modal-header p-0 radius-0 border-none border-t-3 brc-primary-m1 shadow-sm">
                        <h5 class="flex-grow-1 text-blue-d1 text-120 py-3 ml-3 mb-0">

                            <span class="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">KR</span>
                            Key Result

                        </h5>
                        <a href="#" class="close m-0 border-l-1 brc-grey-m4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="modal-body" data-ace-scroll='{"smooth": true}'>
                        <div class="pos-rel">
                            <span>
                                Implantação de processos e controles para gestão de produtos com prazo de validade para itens de mercado
                            </span>
                        </div>
                        <div class="pos-rel">
                            <span class="text-60 text-grey-l1">Created by <strong>Daniel Destro</strong> on April 15, 2021 at 20h50</span>
                        </div>
                        <div class="pos-rel mt-2">
                            <span class="text-80">Este KR mira reduzir ou eliminar o abastecimento e comercialização de produtos perecíveis com prazo de validade vencido nas lojas da rede. Há um alto risco de multa e cassação de alvará de funcionamento.</span>
                        </div>


                        <div class="card ccard border-0 radius-0 shadow-none">
                            <ul class="nav nav-tabs nav-tabs-simple nav-tabs-scroll brc-dark-l3 mx-0 mx-md-0 px-3 px-md-1 pt-2px border-b-2" role="tablist">
                                <li class="nav-item mr-1">
                                    <a class="nav-link p-3 bgc-h-primary-l4 radius-0 font-bolder active" id="overview-tab-btn" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">
                                        Overview
                                    </a>
                                </li>
                                <li class="nav-item mr-1">
                                    <a class="nav-link brc-purple-m1 d-style p-3 bgc-h-purple-l4 radius-0 font-bolder" id="profile16-tab-btn" data-toggle="tab" href="#profile16" role="tab" aria-controls="profile16" aria-selected="false">
                                        Comments
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3 bgc-h-primary-l4 radius-0 font-bolder" id="more16-tab-btn" data-toggle="tab" href="#more16" role="tab" aria-controls="more16" aria-selected="false">
                                        History
                                    </a>
                                </li>

                            </ul>

                            <div class="card-body px-0 py-0">
                                <div class="tab-content border-0 px-0">

                                    <div class="tab-pane show text-95 active text-85" id="overview" role="tabpanel" aria-labelledby="overview-tab-btn">
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1">
                                            <div class="col-sm-4 mb-2">Status:</div>
                                            <div class="col-sm-8 mb-2">
                                                <a class="btn btn-success text-85">Approved</a>
                                            </div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Priotiry:</div>
                                            <div class="col-sm-8 mb-2">
                                                <input type="text" id="id-ionslider-1" name="slider-1" value="" />
                                            </div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Workspace:</div>
                                            <div class="col-sm-8 mb-2">Magalu</div>
                                        </div>
                                        <div class="row ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Success Metric:</div>
                                            <div class="col-sm-8 mb-2">Data de implantação do processo</div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Metric Goals:</div>
                                            <div class="col-sm-8 mb-2">
                                                <span class="btn btn-outline-red border-2 text-85">01/11/21</span>
                                                <span class="btn btn-outline-green border-2 text-85">01/10/21</span>
                                                <span class="btn btn-outline-blue border-2 text-85">01/09/21</span>
                                            </div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Time frame:</div>
                                            <div class="col-sm-8 mb-2">Y2021-Q1</div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Team:</div>
                                            <div class="col-sm-8 mb-2">Conselho</div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Owner:</div>
                                            <div class="col-sm-8 mb-2">
                                                <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                                                    <img alt="User avatar" src="assets/image/avatar/avatar6.jpg" class="w-3 h-3 radius-round mr-1" />
                                                    André Fatala
                                                    <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Contributors:</div>
                                            <div class="col-sm-8 mb-2">
                                                <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                                                    <img alt="User avatar" src="assets/image/avatar/avatar4.jpg" class="w-3 h-3 radius-round mr-1" />
                                                    Luiza Helena Trajano
                                                    <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </span>
                                                <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                                                    <img alt="User avatar" src="assets/image/avatar/avatar5.jpg" class="w-3 h-3 radius-round mr-1" />
                                                    Patrícia Pugas
                                                    <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                                            <div class="col-sm-4 mb-2">Approver:</div>
                                            <div class="col-sm-8 mb-2">
                                                <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                                                    <img alt="User avatar" src="assets/image/avatar/avatar1.jpg" class="w-3 h-3 radius-round mr-1" />
                                                    Fred Trajano
                                                    <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane text-95" id="profile16" role="tabpanel" aria-labelledby="profile16-tab-btn">
                                        <div class="card-body p-0 border-0">
                                            <div class="ace-scroll px-2" data-ace-scroll='{"height": 320, "smooth":true}'>


                                                <div class="d-flex px-3 mb-1">
                                                    <div>
                                                        <div class="mb-1 mt-4">
                                                            <span class="pos-rel">
                                                                <img alt="Jack's avatar" src="assets/image/avatar/avatar6.jpg" class="radius-round w-4 h-4" />
                                                                <span class="radius-round position-tr bgc-success-d1 brc-white border-2 p-1 mt-n1"></span>
                                                            </span>
                                                            <span class="text-600 text-90 ml-1">
                                                                <a href="#" class="btn-text-dark btn-h-text-primary">Jack</a>
                                                            </span>
                                                            <span class="text-80 text-grey-m2 ml-1">38 sec</span>
                                                        </div>
                                                        <div class="py-2 px-3 radius-1 bgc-grey-l4 text-dark-m1 border-1 brc-grey-l2">
                                                            <div class="text-90">
                                                                Raw denim you probably haven't heard of actively? <span class='fa-stack w-auto'> <i class='fas fa-circle text-dark fa-stack-1x text-100'></i> <i class='fas fa-smile-beam text-warning-m3 text-125 fa-stack-1x pos-rel'></i> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="d-flex px-3 mb-1">
                                                    <div>
                                                        <div class="py-2 px-3 radius-1 bgc-grey-l4 text-dark-m1 border-1 brc-grey-l2">
                                                            <div class="text-90">
                                                                Lorem ipsum dolor sit amet
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="d-flex flex-row-reverse px-3 text-right mb-1">
                                                    <div>
                                                        <div class="mb-1 mt-4">
                                                            <span class="pos-rel">
                                                                <img alt="Jane's avatar" src="assets/image/avatar/avatar5.jpg" class="radius-round w-4 h-4" />
                                                                <span class="radius-round position-tr bgc-warning-d1 brc-white border-2 p-1 mt-n1"></span>
                                                            </span>
                                                            <span class="text-600 text-90 ml-1">
                                                                <a href="#" class="btn-text-dark btn-h-text-primary">Jane</a>
                                                            </span>
                                                            <span class="text-80 text-grey-m2 ml-1">2 min</span>
                                                        </div>
                                                        <div class="py-2 px-3 radius-1 bgc-green-d3 border-1 brc-black-tp11 text-white pos-rel">

                                                            <div class="text-90 pos-rel">
                                                                Consectetur adipiscing elit. Quis nostrud exercitation!!!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="d-flex px-3 mb-1">
                                                    <div>
                                                        <div class="mb-1 mt-4">
                                                            <span class="pos-rel">
                                                                <img alt="Jack's avatar" src="assets/image/avatar/avatar6.jpg" class="radius-round w-4 h-4" />
                                                                <span class="radius-round position-tr bgc-success-d1 brc-white border-2 p-1 mt-n1"></span>
                                                            </span>
                                                            <span class="text-600 text-90 ml-1">
                                                                <a href="#" class="btn-text-dark btn-h-text-primary">Jack</a>
                                                            </span>
                                                            <span class="text-80 text-grey-m2 ml-1">3 min</span>
                                                        </div>
                                                        <div class="py-2 px-3 radius-1 bgc-grey-l4 text-dark-m1 border-1 brc-grey-l2">
                                                            <div class="text-90">
                                                                Heard of them jean shorts Austin!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="d-flex flex-row-reverse px-3 text-right mb-1">
                                                    <div>
                                                        <div class="mb-1 mt-4">
                                                            <span class="pos-rel">
                                                                <img alt="Jane's avatar" src="assets/image/avatar/avatar5.jpg" class="radius-round w-4 h-4" />
                                                                <span class="radius-round position-tr bgc-warning-d1 brc-white border-2 p-1 mt-n1"></span>
                                                            </span>
                                                            <span class="text-600 text-90 ml-1">
                                                                <a href="#" class="btn-text-dark btn-h-text-primary">Jane</a>
                                                            </span>
                                                            <span class="text-80 text-grey-m2 ml-1">38 sec</span>
                                                        </div>
                                                        <div class="py-2 px-3 radius-1 bgc-green-d3 border-1 brc-black-tp11 text-white pos-rel">

                                                            <div class="text-90 pos-rel">
                                                                Fusce dapibus, tellus ac cursus commodo... <span class='fa-stack w-auto'> <i class='fas fa-circle text-dark fa-stack-1x text-100'></i> <i class='fas fa-grin-alt text-warning-m3 text-125 fa-stack-1x pos-rel'></i> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="d-flex flex-row-reverse px-3 text-right mb-1">
                                                    <div>
                                                        <div class="py-2 px-3 radius-1 bgc-green-d3 border-1 brc-black-tp11 text-white pos-rel">

                                                            <div class="text-90 pos-rel">
                                                                Donec id elit non mi porta gravida at eget metus
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane text-95" id="more16" role="tabpanel" aria-labelledby="more16-tab-btn">
                                        <div class="pos-rel">
                                            <div class="position-tl h-100 border-l-2 brc-secondary-l2 ml-425"></div>
                                            <div class="pos-rel mt-n3">
                                                <div class="d-flex align-items-center mt-3 mb-425">
                                                    <div class="text-primary-d2 bgc-white radius-1 px-25 py-0 text-600 text-105">
                                                        <span class="badge badge-dot badge-primary ml-25 mr-1"></span>
                                                        Activities
                                                    </div>
                                                </div>
                                                <div class="mt-2 ml-2">
                                                    <div class="mb-425 d-flex align-items-start">
                                                        <span class="radius-round w-5 text-center py-15 border-2 brc-pink-m2 bgc-pink-l4 text-pink-m1">
                                                            <i class="fas fa-camera text-105"></i>
                                                        </span>
                                                        <div class="ml-3 text-grey-d3 text-95">
                                                            Updated by Selena Gomes.
                                                            <div class="text-grey-m1 text-90">April 16, 2021 at 18h01</div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-425 d-flex align-items-start">
                                                        <span class="radius-round w-5 text-center py-15 border-2 brc-info-m2 bgc-info-l4 text-info-m1">
                                                            <i class="fas fa-check text-105"></i>
                                                        </span>
                                                        <div class="ml-3 text-grey-d3 text-95">
                                                            Approved by Fred Trajano.
                                                            <div class="text-grey-m1 text-90">April 16, 2021 at 08h23</div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-425 d-flex align-items-start">
                                                        <span class="radius-round w-5 text-center py-15 border-2 brc-blue-m2 bgc-blue-l4 text-blue">
                                                            <i class="fas fa-file-upload text-105"></i>
                                                        </span>
                                                        <div class="ml-3 text-grey-d3 text-95">
                                                            Attachment uploaded by Adam Levine.
                                                            <div class="text-grey-m1 text-90">April 15, 2021 at 10h17</div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-425 d-flex align-items-start">
                                                        <span class="radius-round w-5 text-center py-15 border-2 brc-green-m2 bgc-green-l4 text-green">
                                                            <i class="far fa-comment-dots text-105"></i>
                                                        </span>
                                                        <div class="ml-3 text-grey-d3 text-95">
                                                            Comment posted by Susan Sarandon.
                                                            <div class="text-grey-m1 text-90">April 15, 2021 at 10h00</div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-425 d-flex align-items-start">
                                                        <span class="radius-round w-5 text-center py-15 border-2 brc-orange-m2 bgc-orange-l4 text-orange-d3">
                                                            <i class="far fa-star text-105"></i>
                                                        </span>
                                                        <div class="ml-3 text-grey-d3 text-95">
                                                            Created by Daniel Destro.
                                                            <div class="text-grey-m1 text-90">April 14, 2021 at 20h30</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </div>



    )
}