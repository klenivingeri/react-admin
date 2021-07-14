
import { useEffect, useContext } from 'react'
import { Comments } from './comments'
import { History } from './history'
import { Overview } from './overview'
import { Edit } from './edit'
import { ShowContent } from './showContent'
import './styles.scss'

import { GoalContext } from '../../contexts'


export function AsideBox() {
    let el = ''

    const { goalobj } = useContext(GoalContext)

    useEffect(() => {
        el = document.querySelector(".asidebox")
    });

    function handleclose() {
        el.classList.remove('show')
    }

    return (
        <div class="container container-plus modal modal-nb ace-aside aside-right aside-below-nav asidebox" id="aside-1" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content shadow border-0 radius-0">
                    <div class="modal-header p-0 radius-0 border-none border-t-3 brc-primary-m1 shadow-sm">
                        <h5 class="flex-grow-1 text-blue-d1 text-120 py-3 ml-3 mb-0">

                            <span class="badge bgc-white border-1 border-l-3 mr-1 brc-success-m2 btn-text-success text-70">KR</span>
                            {goalobj.goal}

                        </h5>
                        <a href="#" class="close m-0 border-l-1 brc-grey-m4" data-dismiss="modal" aria-label="Close" onClick={handleclose}>
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div className="aside-box">
                        <div className="scroll">
                            <div class="modal-body " data-ace-scroll='{"smooth": true}'>

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
                                            <a class="nav-link brc-purple-m1 d-style p-3 bgc-h-purple-l4 radius-0 font-bolder" id="comments-tab-btn" data-toggle="tab" href="#comments" role="tab" aria-controls="profile16" aria-selected="false">
                                                Comments
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-3 bgc-h-primary-l4 radius-0 font-bolder" id="history-tab-btn" data-toggle="tab" href="#history" role="tab" aria-controls="more16" aria-selected="false">
                                                History
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-3 bgc-h-primary-l4 radius-0 font-bolder" id="edit-tab-btn" data-toggle="tab" href="#edit" role="tab" aria-controls="more16" aria-selected="false">
                                                Edit
                                            </a>
                                        </li>

                                    </ul>

                                    <div class="card-body px-0 py-0">
                                        <div class="tab-content border-0 px-0">

                                            <ShowContent id="overview" show="show" active="active">
                                                <Overview />
                                            </ShowContent>

                                            <ShowContent id="comments">
                                                <Comments />
                                            </ShowContent>

                                            <ShowContent id="history">
                                                <History />
                                            </ShowContent>
                                            <ShowContent id="edit">
                                                <Edit />
                                            </ShowContent>

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